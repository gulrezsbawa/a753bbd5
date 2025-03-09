import React from "react";
import ReactDOM from "react-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import TopNavigation from "@components/shared/TopNavigations";
import BottomNavigation from "@components/shared/BottomNavigation";
import ActivityRouter from "./ActivityRouter";
import { ActivityProvider } from "@contexts/ActivityProvider";
import { SnackbarProvider } from "@contexts/SnackbarProvider";
import ErrorBoundary from "@components/shared/ErrorBoundary";
import { Container } from "./App.styles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <ActivityProvider>
            <Container>
              <TopNavigation />
              <ActivityRouter />
              <BottomNavigation />
            </Container>
          </ActivityProvider>
        </SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
