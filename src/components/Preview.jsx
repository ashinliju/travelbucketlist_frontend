import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

export default function Preview({ bucketlist }) {
  return (
<div style={{ padding: "40px" }}>
  <Paper
    elevation={4}
    sx={{
      maxWidth: 900,
      minHeight: 550,
      margin: "auto",
      padding: 6,
      borderRadius: 4,
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 3,
      }}
    >
      👀 
    </Typography>

    <Divider sx={{ mb: 4 }} />

    <Stack spacing={3}>

      <Typography
        variant="h4"
        sx={{ fontWeight: 700 }}
      >
        🌍 {bucketlist.destination || "No destination"}
      </Typography>

      <Typography variant="h6">
        📅 <strong>Travel Date:</strong>{" "}
        {bucketlist.traveldate || "Not selected"}
      </Typography>

      <Typography variant="h6">
        📅 <strong>Return Date:</strong>{" "}
        {bucketlist.returndate || "Not selected"}
      </Typography>

      <Typography variant="h6">
        💰 <strong>Estimated Expense:</strong>{" "}
        {bucketlist.estimatedexp
          ? `${bucketlist.currency} ${bucketlist.estimatedexp}`
          : "Not entered"}
      </Typography>

      <Typography variant="h6">
        💱 <strong>Currency:</strong>{" "}
        {bucketlist.currency || "Not selected"}
      </Typography>

      <Typography variant="h6">
        📝 <strong>Notes:</strong>{" "}
        {bucketlist.notes || "No notes added"}
      </Typography>

    </Stack>
  </Paper>
</div>
  );
}