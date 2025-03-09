/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SnackbarProvider, useSnackbar } from "../contexts/SnackbarProvider";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
  },
  ToastContainer: () => <div data-testid="toast-container" />,
}));

const TestComponent = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <div>
      <button onClick={() => showSnackbar("Success Message", "success")}>
        Success
      </button>
      <button onClick={() => showSnackbar("Error Message", "error")}>
        Error
      </button>
      <button onClick={() => showSnackbar("Warning Message", "warning")}>
        Warning
      </button>
      <button onClick={() => showSnackbar("Info Message", "info")}>Info</button>
    </div>
  );
};

describe("SnackbarProvider", () => {
  test("renders ToastContainer", () => {
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    expect(screen.getByTestId("toast-container")).toBeInTheDocument();
  });

  test("calls toast.success when showSnackbar is triggered with 'success'", async () => {
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    await userEvent.click(screen.getByText("Success"));

    expect(toast.success).toHaveBeenCalledWith("Success Message");
  });

  test("calls toast.error when showSnackbar is triggered with 'error'", async () => {
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    await userEvent.click(screen.getByText("Error"));

    expect(toast.error).toHaveBeenCalledWith("Error Message");
  });

  test("calls toast.warn when showSnackbar is triggered with 'warning'", async () => {
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    await userEvent.click(screen.getByText("Warning"));

    expect(toast.warn).toHaveBeenCalledWith("Warning Message");
  });

  test("calls toast.info when showSnackbar is triggered with 'info'", async () => {
    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    await userEvent.click(screen.getByText("Info"));

    expect(toast.info).toHaveBeenCalledWith("Info Message");
  });
});
