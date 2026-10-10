import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Stack} from "@mui/material";
import { Link } from 'react-router-dom';
// import Link from "@mui/material/Link";



export default function Home() {
  const savedUser = JSON.parse(localStorage.getItem("registeredUser") || "{}");
  const userName = savedUser.name || "Traveler";

  
 return (
    <div >
    <Box   sx={{
    p: 3, // Padding inside footer
    mt: 4, // Space above footer
  }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "text.primary",
          mb: 1,
        }}
      >
        Welcome back, {userName}
      </Typography>


      
    <Box
      sx={{
        height: "600px",
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
          ),
          url("https://images.unsplash.com/photo-1500534623283-312aade485b7")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ color: "white", maxWidth: "650px" }}>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            ✈️ WELCOME TO WANDERLIST
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "45px",
                md: "70px",
              },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Explore.
            <br />
            Dream.
            <br />
            Travel.
          </Typography>

          <Typography
            sx={{
              fontSize: "19px",
              lineHeight: 1.7,
              mb: 4,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Discover amazing destinations, create your bucket
            list and start planning your next unforgettable journey.
          </Typography>

            <Link to='/destination'>
                        <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
            }}
          >
            Explore Destinations ✈️
          </Button>
            </Link>

        </Box>
      </Container>
    </Box>


{/* ================= PLAN YOUR TRIP ================= */}

<Box
  sx={{
    py: 8,
    backgroundColor: "#f7f9fc",
  }}
>
  <Container maxWidth="lg">

    {/* Heading */}
    <Box
      sx={{
        textAlign: "center",
        mb: 6,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          mb: 1,
        }}
      >
        Plan Your Trip ✈️
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          fontSize: "17px",
        }}
      >
        Everything you need to turn your travel dreams into reality.
      </Typography>
    </Box>

    {/* Three Features */}
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
    >

      {/* Save Places */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "100%",
            width: "100%",
            textAlign: "center",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box
            sx={{
              fontSize: "45px",
              mb: 2,
            }}
          >
            ❤️
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            Save Places
          </Typography>

          <Typography color="text.secondary">
            Save the destinations you've always dreamed
            of visiting.
          </Typography>
        </Card>
      </Grid>

      {/* Plan Dates */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "100%",
            width: "100%",
            textAlign: "center",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box
            sx={{
              fontSize: "45px",
              mb: 2,
            }}
          >
            📅
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            Plan Dates
          </Typography>

          <Typography color="text.secondary">
            Organize your travel dates and keep your
            upcoming adventures on track.
          </Typography>
        </Card>
      </Grid>

      {/* Track Budget */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            height: "100%",
            width: "100%",
            textAlign: "center",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Box
            sx={{
              fontSize: "45px",
              mb: 2,
            }}
          >
            💰
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            Track Budget
          </Typography>

          <Typography color="text.secondary">
            Keep track of your estimated expenses and
            plan your journey within your budget.
          </Typography>
        </Card>
      </Grid>

    </Grid>

    {/* Plan New Trip Button */}
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
<Link to='/destination'>  
    <Button
        variant="contained"
        size="large"
        sx={{
          px: 5,
          py: 1.6,
          borderRadius: 3,
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        Plan New Trip
      </Button></Link>
    </Box>

  </Container>
</Box>

</Box>

    </div>
  )
}
