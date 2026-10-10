import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FcRules } from "react-icons/fc";
import Stack from '@mui/material/Stack';
import { BiSolidPlaneAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';




function Header() {
   
  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
  <AppBar
    position="static"
    sx={{
      background: "linear-gradient(135deg, #071A2F 0%, #0B2D4F 100%)",
      boxShadow: "0 4px 20px rgba(2, 20, 40, 0.25)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <Toolbar
      sx={{
        minHeight: { xs: 64, md: 76 },
        px: { xs: 2, md: 4 },
        gap: 1.5,
        flexWrap: "wrap",
        py: 1,
      }}
    >
      {/* Logo */}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          mr: 0.5,
          width: 46,
          height: 46,
          color: "#F5C76B",
          backgroundColor: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(245,199,107,0.3)",
          borderRadius: 2.5,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(245,199,107,0.15)",
            transform: "rotate(-8deg)",
          },
        }}
      >
        <Link
          to="/home"
          style={{
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BiSolidPlaneAlt size={25} />
        </Link>
      </IconButton>

      {/* Title */}
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 800,
          letterSpacing: "0.5px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
          "&::first-letter": {
            color: "#F5C76B",
          },
        }}
      >
        Wanderlist
      </Typography>

      {/* Centered navigation */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 1,
          mx: { xs: 0, md: 2 },
        }}
      >
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
              px: { xs: 1.5, md: 2.2 },
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#1565C0",
                boxShadow: "0 4px 12px rgba(21,101,192,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Home
          </Button>
        </Link>

        <Link to="/destination" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
              px: { xs: 1.5, md: 2.2 },
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#1565C0",
                boxShadow: "0 4px 12px rgba(21,101,192,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Destination
          </Button>
        </Link>

        <Link to="/calender" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
              px: { xs: 1.5, md: 2.2 },
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#1565C0",
                boxShadow: "0 4px 12px rgba(21,101,192,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Calendar
          </Button>
        </Link>

        <Link to="/report" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
              px: { xs: 1.5, md: 2.2 },
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#1565C0",
                boxShadow: "0 4px 12px rgba(21,101,192,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Report
          </Button>
        </Link>

        <Link to="/downloads" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 2,
              px: { xs: 1.5, md: 2.2 },
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#1565C0",
                boxShadow: "0 4px 12px rgba(21,101,192,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            All Downloads
          </Button>
        </Link>
      </Stack>

      {/* Logout */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            color: "#FFFFFF",
            background: "linear-gradient(135deg, #D94343 0%, #B71C1C 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            px: { xs: 2, md: 2.5 },
            py: 1,
            fontWeight: 700,
            textTransform: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 3px 10px rgba(183,28,28,0.2)",
            transition: "all 0.25s ease",
            "&:hover": {
              background: "linear-gradient(135deg, #EF5350 0%, #C62828 100%)",
              boxShadow: "0 5px 14px rgba(183,28,28,0.35)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Logout
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
</Box>
    </div>
  )
}

export default Header