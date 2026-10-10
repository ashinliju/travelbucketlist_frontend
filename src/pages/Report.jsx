import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteBucketlistAPI, getCalenderdataAPI } from "../Service/apiservice";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Report() {

  const navigate = useNavigate();

   const [trips, setTrips] = useState([]);
  
    const getTrips = async () => {
      try {
        const res = await getCalenderdataAPI();
  
        console.log(res.data);
  
        setTrips(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getTrips();
    }, []);


  // Total number of trips
  const totalTrips = trips.length;

  // Total budget
  const totalBudget = trips.reduce(
    (total, trip) => total + Number(trip.estimatedexp || 0),
    0
  );
  const totalDestinations = new Set(
  trips.map((trip) => trip.destination)
).size;


  const upcomingTrip=trips.filter(trip=>
    dayjs(trip.traveldate).isSame(dayjs(),'day')|| 
    dayjs(trip.traveldate).isAfter(dayjs(),'day')
  )

const handledelete = async (id) => {
  try {
    await deleteBucketlistAPI(id);

    setTrips((prevTrips) =>
      prevTrips.filter((trip) => trip.id !== id)
    );

Swal.fire({
  title: 'success',
  text: 'Deleted successfully',
  icon: 'success',
  confirmButtonText: 'Done'
}) 
 } catch (error) {
    console.error("Delete error:", error);
    alert("Failed to delete trip");
  }
}

  return (
    <div>
<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    px: 2,
  }}
>
  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={3}
    alignItems="stretch"
    justifyContent="center"
    sx={{
      mt: 4,
      width: "100%",
      maxWidth: 1050,
    }}
  >
    {/* Total Trips */}
    <Box
      sx={{
        flex: 1,
        minWidth: 200,
        p: 3,
        borderRadius: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #eff6ff, #ffffff)",
        border: "1px solid #dbeafe",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <Typography sx={{ fontSize: 35, mb: 1 }}>
        ✈️
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#475569",
          fontWeight: 600,
        }}
      >
        Total Trips
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mt: 1,
          fontWeight: 700,
          color: "#2563eb",
        }}
      >
        {totalTrips}
      </Typography>
    </Box>

    {/* Total Budget */}
    <Box
      sx={{
        flex: 1,
        minWidth: 200,
        p: 3,
        borderRadius: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #ecfdf5, #ffffff)",
        border: "1px solid #d1fae5",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <Typography sx={{ fontSize: 35, mb: 1 }}>
        💰
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#475569",
          fontWeight: 600,
        }}
      >
        Total Budget
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mt: 1,
          fontWeight: 700,
          color: "#059669",
        }}
      >
        {totalBudget}
      </Typography>
    </Box>

    {/* Total Destination */}
    <Box
      sx={{
        flex: 1,
        minWidth: 200,
        p: 3,
        borderRadius: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #fef3c7, #ffffff)",
        border: "1px solid #fde68a",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <Typography sx={{ fontSize: 35, mb: 1 }}>
        🌍
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#475569",
          fontWeight: 600,
        }}
      >
        Total Destination
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mt: 1,
          fontWeight: 700,
          color: "#d97706",
        }}
      >
        {totalDestinations}
      </Typography>
    </Box>

    {/* Upcoming Trip */}
    <Box
      sx={{
        flex: 1.2,
        minWidth: 230,
        p: 3,
        borderRadius: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, #f5f3ff, #ffffff)",
        border: "1px solid #ddd6fe",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <Typography sx={{ fontSize: 35, mb: 1 }}>
        🧳
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "#475569",
          fontWeight: 600,
          mb: 1.5,
        }}
      >
        Up comming Trip
      </Typography>

      {upcomingTrip.length > 0 ? (
        <>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#7c3aed",
              mb: 1,
            }}
          >
            🌍 {upcomingTrip[0].destination}
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontWeight: 500,
            }}
          >
            📅 {upcomingTrip[0].traveldate}
          </Typography>
        </>
      ) : (
        <Typography
          sx={{
            color: "#94a3b8",
            mt: 2,
          }}
        >
          No upcoming trips
        </Typography>
      )}
    </Box>
  </Stack>
</Box>




<Box
  sx={{
    width: "92%",
    maxWidth: 1200,
    mx: "auto",
    mt: 6,
    mb: 6,
  }}
>
  {/* Heading */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3,
    }}
  >
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#172033",
          letterSpacing: "-0.5px",
        }}
      >
        Travel Summary ✈️
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          color: "#64748b",
          fontSize: "0.95rem",
        }}
      >
        Keep track of your upcoming travel plans
      </Typography>
    </Box>
  </Box>

  {/* Table */}
  <TableContainer
    component={Paper}
    elevation={0}
    sx={{
      borderRadius: 4,
      overflow: "hidden",
      border: "1px solid #e2e8f0",
      boxShadow: "0 10px 35px rgba(15, 23, 42, 0.08)",
    }}
  >
    <Table>
      {/* Table Header */}
      <TableHead>
        <TableRow
          sx={{
            backgroundColor: "#f8fafc",
          }}
        >
          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
            }}
          >
            Destination
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
            }}
          >
            Travel Date
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
            }}
          >
            Return Date
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
            }}
          >
            Estimated Expense
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
              textAlign: "center",
            }}
          >
            Edit
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
              textAlign: "center",
            }}
          >
            View
          </TableCell>

          <TableCell
            sx={{
              fontWeight: 700,
              color: "#334155",
              py: 2,
              textAlign: "center",
            }}
          >
            Delete
          </TableCell>
        </TableRow>
      </TableHead>

      {/* Table Body */}
      <TableBody>
        {upcomingTrip.map((trip) => (
          <TableRow
            key={trip.id}
            sx={{
              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "#f8fafc",
              },

              "&:last-child td": {
                borderBottom: 0,
              },
            }}
          >
            {/* Destination */}
            <TableCell
              sx={{
                py: 2.2,
                fontWeight: 600,
                color: "#1e293b",
              }}
            >
              🌍 {trip.destination}
            </TableCell>

            {/* Travel Date */}
            <TableCell
              sx={{
                color: "#475569",
                py: 2.2,
              }}
            >
              📅 {trip.traveldate}
            </TableCell>

            {/* Return Date */}
            <TableCell
              sx={{
                color: "#475569",
                py: 2.2,
              }}
            >
              📅 {trip.returndate}
            </TableCell>

            {/* Expense */}
            <TableCell
              sx={{
                color: "#059669",
                fontWeight: 600,
                py: 2.2,
              }}
            >
              💰 {trip.estimatedexp}
            </TableCell>

            {/* Edit */}
            <TableCell
              align="center"
              sx={{
                py: 2.2,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  color: "#2563eb",
                  backgroundColor: "#eff6ff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "#dbeafe",
                    transform: "scale(1.08)",
                  },
                }}
              >
                <FaEdit
                  style={{
                    fontSize: "18px",
                  }}
                  onClick={() =>
                    navigate("/edit", {
                      state: { trip },
                    })
                  }
                />
              </Box>
            </TableCell>

            {/* View */}
            <TableCell
              align="center"
              sx={{
                py: 2.2,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  color: "#7c3aed",
                  backgroundColor: "#f5f3ff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "#ede9fe",
                    transform: "scale(1.08)",
                  },
                }}
              >
                <FaEye
                  style={{
                    fontSize: "18px",
                  }}
                  onClick={() =>
                    navigate("/view", {
                      state: { trip },
                    })
                  }
                />
              </Box>
            </TableCell>

            {/* Delete */}
            <TableCell
              align="center"
              sx={{
                py: 2.2,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  color: "#dc2626",
                  backgroundColor: "#fef2f2",
                  cursor: "pointer",
                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "#fee2e2",
                    transform: "scale(1.08)",
                  },
                }}
              >
                <MdOutlineDeleteOutline
                  style={{
                    fontSize: "21px",
                  }}
                  onClick={() => handledelete(trip.id)}
                />
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>

    </div>

  )
}
