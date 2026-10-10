import React from 'react'
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";

export default function Login() {

  const navigate=useNavigate()
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleLogin=(e)=>{
        e.preventDefault()

const user = JSON.parse(
  localStorage.getItem("registeredUser"));


if (!user) {
  alert("No registered user found");
  return;
}

if (email === user.email) {
  if (password === user.password) {
    console.log("Login success");
    alert("Login Success");

    navigate("/home");

  } else {
    alert("Password incorrect");
  }
} else {
  alert("Email incorrect");
}
  
      }

  return (
    <div>
  <Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
    background: "#f8fafc",
  }}
>
  <Box
    sx={{
      width: "100%",
      maxWidth: 1050,
      minHeight: 600,
      display: "flex",
      overflow: "hidden",
      borderRadius: 5,
      backgroundColor: "#fff",
      boxShadow: "0 25px 70px rgba(15, 23, 42, 0.12)",
      border: "1px solid #e5e7eb",
    }}
  >
    {/* LEFT IMAGE */}
    <Box
      sx={{
        width: "80%",
        display: { xs: "none", md: "block" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="https://wallpaperaccess.com/full/706921.jpg"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Image overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.45))",
        }}
      />
    </Box>

    {/* RIGHT LOGIN */}
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, sm: 5, md: 7 },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <Typography
          variant="h3"
          fontWeight={900}
          color="#111827"
          sx={{
            mb: 1,
            letterSpacing: "-0.8px",
          }}
        >
          Login
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mb: 4,
            fontSize: "0.95rem",
          }}
        >
          Welcome back. Please enter your details.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <TextField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2.5,
                backgroundColor: "#f9fafb",

                "& fieldset": {
                  borderColor: "#e5e7eb",
                },

                "&:hover fieldset": {
                  borderColor: "#cbd5e1",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#2563eb",
                  borderWidth: "1.5px",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#2563eb",
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            inputProps={{ minLength: 8 }}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2.5,
                backgroundColor: "#f9fafb",

                "& fieldset": {
                  borderColor: "#e5e7eb",
                },

                "&:hover fieldset": {
                  borderColor: "#cbd5e1",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#2563eb",
                  borderWidth: "1.5px",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#2563eb",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            onClick={handleLogin}
            sx={{
              mt: 1,
              height: 52,
              borderRadius: 2.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,

              background:
                "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",

              boxShadow:
                "0 10px 25px rgba(37, 99, 235, 0.25)",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)",

                boxShadow:
                  "0 14px 30px rgba(37, 99, 235, 0.3)",

                transform: "translateY(-1px)",
              },

              transition: "all 0.2s ease",
            }}
          >
            Login
          </Button>
        </Box>

        <Typography
          textAlign="center"
          variant="h4"

          mt={4}
          sx={{
            color: "#6b7280",
            fontSize: "0.9rem",
                      pt:4

          }}
        >
          Don't have an account?{" "}
          <Link
            component={RouterLink}
            to="/register"
            underline="hover"
            sx={{
              color: "#2563eb",
              fontWeight: 600,
              ml: 0.5,
            }}
          >
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>
    </div>
  )
}
