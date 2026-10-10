
import React, { useEffect, useState } from "react";

import {
  deleteDownloadstAPI,
  getallHistoryAPI,
} from "../Service/apiservice";

import {
  Box,
  Stack,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { MdDelete } from "react-icons/md";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Downloads() {
  const [history, sethistory] = useState([]);
  const [openChart, setOpenChart] = useState(false);

  // Get all downloaded trips
  const getallDownloadstrip = async () => {
    try {
      const res = await getallHistoryAPI("result");

      console.log("Download history:", res.data);

      sethistory(res.data);
    } catch (err) {
      console.error(
        "Error fetching downloads:",
        err
      );
    }
  };

  useEffect(() => {
    getallDownloadstrip();
  }, []);

  // Total downloaded trips with images
  const totalDownloads = history.filter(
    (item) => item?.imageUrl
  ).length;

  // Count downloaded trips by place.
  // Change item.place if your API uses a different field.
  const placeCounts = history.reduce((acc, item) => {
    const place = item?.destination || "Unknown Place";

    acc[place] = (acc[place] || 0) + 1;

    return acc;
  }, {});

  const pieData = Object.entries(placeCounts).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const colors = [
    "#1976d2",
    "#ed6c02",
    "#2e7d32",
    "#9c27b0",
    "#d32f2f",
    "#0288d1",
    "#c2185b",
    "#7b1fa2",
    "#00897b",
    "#f9a825",
  ];

  // Delete a downloaded trip
  const deletetrip = async (id) => {
    try {
      const res=await deleteDownloadstAPI(id);
      console.log(res);
     getallDownloadstrip();
    } catch (err) {
      console.error(
        "Delete error:",
        err
      );
    }
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", pb: 4 }}>
      {/* Page Heading */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mx: { xs: 2, sm: 5, md: 10 },
          my: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 24, sm: 30 },
            fontWeight: 500,
          }}
        >
          All Downloaded Trip Details
        </Typography>

        <Button
          variant="contained"
          onClick={() => setOpenChart(true)}
        >
          View Chart
        </Button>
      </Stack>

      {/* Pie Chart Modal */}
      <Modal
        open={openChart}
        onClose={() => setOpenChart(false)}
        aria-labelledby="places-chart-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 500 },
            maxHeight: "85vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            color: "text.primary",
            borderRadius: 3,
            boxShadow: 24,
            p: 3,
            outline: "none",
          }}
        >
          {/* Modal Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              id="places-chart-title"
              variant="h6"
              fontWeight="bold"
            >
              Downloaded Trips by Place
            </Typography>

            <IconButton
              onClick={() => setOpenChart(false)}
              aria-label="Close chart"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            Total downloaded trips: {totalDownloads}
          </Typography>

          {pieData.length > 0 ? (
            <>
              {/* Interactive Pie Chart */}
              <Box sx={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={110}
                      paddingAngle={pieData.length > 1 ? 2 : 0}
                      isAnimationActive={false}
                    >
                      {pieData.map((item, index) => (
                        <Cell
                          key={item.name}
                          fill={colors[index % colors.length]}
                          stroke="#ffffff"
                          strokeWidth={1}
                        />
                      ))}
                    </Pie>

                    {/* Show place name and trip count on hover */}
                    <Tooltip
                      labelFormatter={(name) => `Place: ${name}`}
                      formatter={(value) => [
                        `${value} ${
                          value === 1 ? "trip" : "trips"
                        }`,
                        "Downloads",
                      ]}
                      contentStyle={{
                        borderRadius: 8,
                        border: "1px solid #ddd",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>

              {/* Place Legend and Counts */}
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                {pieData.map((item, index) => (
                  <Box
                    key={item.name}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ minWidth: 0 }}
                    >
                      <Box
                        sx={{
                          width: 14,
                          height: 14,
                          minWidth: 14,
                          borderRadius: "3px",
                          bgcolor: colors[index % colors.length],
                        }}
                      />

                      <Typography
                        sx={{ overflowWrap: "anywhere" }}
                      >
                        {item.name}
                      </Typography>
                    </Stack>

                    <Typography
                      fontWeight="bold"
                      sx={{ whiteSpace: "nowrap" }}
                    >
                      {item.value}{" "}
                      {item.value === 1 ? "trip" : "trips"}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </>
          ) : (
            <Typography color="text.secondary">
              No downloaded places found.
            </Typography>
          )}
        </Box>
      </Modal>

      {/* Download Count Card */}
      <Card
        sx={{
          width: { xs: "auto", sm: 280 },
          mx: { xs: 2, sm: 5, md: 10 },
          my: 5,
          borderRadius: 3,
          boxShadow: 4,
          bgcolor: "#1976d2",
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h6">
            Downloaded Trips
          </Typography>

          <Typography
            variant="h3"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            {totalDownloads}
          </Typography>
        </CardContent>
      </Card>

      {/* Downloaded Trip Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 300px))",
            md: "repeat(3, minmax(0, 300px))",
          },
          gap: 4,
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          px: { xs: 2, sm: 4 },
          boxSizing: "border-box",
        }}
      >
        {history.map((item, index) => (
          <Paper
            key={item.id || index}
            elevation={6}
            sx={{
              width: "100%",
              maxWidth: 300,
              height: 400,
              p: 2,
              boxSizing: "border-box",
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            {/* Date and Delete Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {item.formatedDate}
              </Typography>

              <IconButton
                color="error"
                onClick={() => deletetrip(item.id)}
                aria-label="Delete downloaded trip"
              >
                <MdDelete />
              </IconButton>
            </Box>

            {/* Trip Image */}
            <Box
              component="img"
              src={item.imageUrl}
              alt={item.place || "Downloaded trip"}
              sx={{
                width: "100%",
                height: "calc(100% - 40px)",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Paper>
        ))}
      </Box>

      {/* Empty State */}
      {history.length === 0 && (
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 4 }}
        >
          No downloaded trips found.
        </Typography>
      )}
    </Box>
  );
}
