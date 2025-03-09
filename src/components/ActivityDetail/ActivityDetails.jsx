import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import {
  CardContent,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { formatMobileNumber, getDateAndTime } from "@utils";
import {
  StyledCard,
  LoaderContainer,
  ErrorMessage,
  Wrapper,
  Title,
} from "./ActivityDetails.styles";

const BASE_URL = process.env.BASE_URL;
const ACTIVITIES_URL = `${BASE_URL}/activities`;

const fetchActivityDetail = async (id) => {
  try {
    const response = await fetch(`${ACTIVITIES_URL}/${id}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    throw new Error(error.message || "Failed to fetch activity details");
  }
};

const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery(["activityDetail", id], () =>
    fetchActivityDetail(id)
  );

  const activity = useMemo(() => {
    if (!data) return {};
    const {
      direction,
      from,
      to,
      via,
      duration,
      call_type,
      created_at,
      is_archived,
    } = data;
    return {
      direction,
      formattedFrom: formatMobileNumber(from),
      formattedTo: formatMobileNumber(to),
      formattedVia: formatMobileNumber(via),
      duration,
      callType: call_type,
      isArchived: is_archived ? "Yes" : "No",
      createdAt: getDateAndTime(created_at),
    };
  }, [data]);

  if (isLoading)
    return (
      <LoaderContainer>
        <CircularProgress size={60} thickness={4} />
      </LoaderContainer>
    );

  if (error)
    return <ErrorMessage variant="body1">Failed to load data</ErrorMessage>;

  return (
    <Wrapper>
      <IconButton color="default" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>

      <StyledCard>
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Activity Detail
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {[
                  { label: "Direction", value: activity.direction },
                  { label: "From", value: activity.formattedFrom },
                  { label: "To", value: activity.formattedTo },
                  { label: "Via", value: activity.formattedVia },
                  { label: "Duration", value: `${activity.duration} seconds` },
                  { label: "Call Type", value: activity.callType },
                  { label: "Archived", value: activity.isArchived },
                  {
                    label: "Created At",
                    value: `${activity.createdAt.date} ${activity.createdAt.time}`,
                  },
                ].map(({ label, value }) => (
                  <TableRow key={label}>
                    <TableCell>
                      <Title>{label}</Title>
                    </TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </StyledCard>
    </Wrapper>
  );
};

export default ActivityDetails;
