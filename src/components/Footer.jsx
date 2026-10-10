import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Link,
  Divider,
} from "@mui/material";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {

     const quickLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Destinations", path: "/destinations" },
    { name: "Travel Calendar", path: "/calendar" },
    { name: "Reports", path: "/reports" },
  ];

  const resources = [
    { name: "About Us", path: "/about" },
    { name: "Travel Tips", path: "/travel-tips" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = {
    color: "#d3deeb",
    display: "block",
    mb: 1,
    fontSize: "14px",
    textDecoration: "none",
    "&:hover": {
      color: "#8ab8ff",
      textDecoration: "underline",
    },
  };

  return (
    <div>
<Box component="footer" sx={{ width: "100%", mt: "auto" }}>
  <Card
    sx={{
      background: "linear-gradient(135deg, #071A2F 0%, #0B2D4F 100%)",
      color: "#FFFFFF",
      borderRadius: 0,
      boxShadow: "0 -4px 20px rgba(2, 20, 40, 0.18)",
      borderTop: "1px solid rgba(245, 199, 107, 0.3)",
    }}
  >
    <CardContent
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 5 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "2fr 1fr 1fr 1.5fr",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Brand */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <TravelExploreIcon
              sx={{
                fontSize: 34,
                color: "#F5C76B",
                filter: "drop-shadow(0 2px 5px rgba(245,199,107,0.2))",
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: "0.5px",
                color: "#FFFFFF",
              }}
            >
              WanderList
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "#C7D6E8",
              lineHeight: 1.9,
              maxWidth: 300,
              mb: 2.5,
            }}
          >
            Plan your journeys. Save your memories.
            Explore the world, one trip at a time.
          </Typography>

          {/* Social icons */}
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <InstagramIcon
              sx={{
                color: "#C7D6E8",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#F5C76B",
                  transform: "translateY(-3px)",
                },
              }}
            />

            <FacebookIcon
              sx={{
                color: "#C7D6E8",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#F5C76B",
                  transform: "translateY(-3px)",
                },
              }}
            />

            <XIcon
              sx={{
                color: "#C7D6E8",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#F5C76B",
                  transform: "translateY(-3px)",
                },
              }}
            />
          </Box>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#FFFFFF",
              "&::after": {
                content: '""',
                display: "block",
                width: 35,
                height: 3,
                mt: 1,
                borderRadius: 2,
                backgroundColor: "#F5C76B",
              },
            }}
          >
            Quick Links
          </Typography>

          {quickLinks.map((link) => (
            <Link
              key={link.name}
              component={RouterLink}
              to={link.path}
              sx={{
                ...linkStyle,
                display: "block",
                width: "fit-content",
                color: "#C7D6E8",
                textDecoration: "none",
                mb: 1.3,
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#F5C76B",
                  transform: "translateX(4px)",
                },
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Resources */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#FFFFFF",
              "&::after": {
                content: '""',
                display: "block",
                width: 35,
                height: 3,
                mt: 1,
                borderRadius: 2,
                backgroundColor: "#F5C76B",
              },
            }}
          >
            Resources
          </Typography>

          {resources.map((link) => (
            <Link
              key={link.name}
              component={RouterLink}
              to={link.path}
              sx={{
                ...linkStyle,
                display: "block",
                width: "fit-content",
                color: "#C7D6E8",
                textDecoration: "none",
                mb: 1.3,
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#F5C76B",
                  transform: "translateX(4px)",
                },
              }}
            >
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Contact */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#FFFFFF",
              "&::after": {
                content: '""',
                display: "block",
                width: 35,
                height: 3,
                mt: 1,
                borderRadius: 2,
                backgroundColor: "#F5C76B",
              },
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#C7D6E8",
              lineHeight: 1.9,
              mb: 1.5,
            }}
          >
            Have questions or suggestions?
            We'd love to hear from you.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#F5C76B",
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
            Travel the world, one trip at a time.
          </Typography>
        </Box>
      </Box>
    </CardContent>

    {/* Bottom section */}
    <Divider
      sx={{
        borderColor: "rgba(199, 214, 232, 0.18)",
      }}
    />

    <CardActions
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 2.5,
        backgroundColor: "rgba(0, 0, 0, 0.12)",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#C7D6E8",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} WanderList.
        All rights reserved.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#C7D6E8",
            cursor: "pointer",
            transition: "color 0.2s ease",
            "&:hover": {
              color: "#F5C76B",
            },
          }}
        >
          Privacy Policy
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#C7D6E8",
            cursor: "pointer",
            transition: "color 0.2s ease",
            "&:hover": {
              color: "#F5C76B",
            },
          }}
        >
          Terms of Use
        </Typography>
      </Box>
    </CardActions>
  </Card>
</Box>
    </div>
  )
}
