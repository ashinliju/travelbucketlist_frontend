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



export default function Register() {

      const navigate=useNavigate()

  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log({ name, email, password });

      const userData = {
    name: name,
    email: email,
    password:password
  };

  localStorage.setItem(
    "registeredUser",
    JSON.stringify(userData)
  );

  alert("Registration successful!");
  navigate("/");


  console.log("Saved user:", userData);

    // Connect your registration API here.
  };

  

  return (
 <div>
<Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: { xs: 2, md: 4 },
    background: "#eef3f8",
  }}
>
  <Box
    sx={{
      width: "100%",
      maxWidth: 1100,
      minHeight: 620,
      display: "flex",
      background: "#fff",
      borderRadius: "28px",
      overflow: "hidden",
      boxShadow: "0 25px 70px rgba(15, 23, 42, 0.12)",
    }}
  >
    {/* IMAGE */}
    <Box
      sx={{
        position: "relative",
        width: { xs: "0%", md: "52%" },
        display: { xs: "none", md: "block" },
        overflow: "hidden",
      }}
    >
      <img
        src="https://th.bing.com/th/id/R.8df7a573e3dc4abf80d58308ca9101dc?rik=tHUM7J1jesxfRg&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f71%2f83%2fU16IMA.jpg&ehk=bZL6dGQv7Dq98u%2bMCJ%2be3I8emrZnnmAjo7ZZ9w3fUdg%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Soft overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.02), rgba(15,23,42,0.28))",
        }}
      />
    </Box>

    {/* FORM */}
    <Box
      sx={{
        width: { xs: "100%", md: "48%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 6, md: 7 },
        py: 5,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 390 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#172033",
            letterSpacing: "-1px",
            mb: 1,
          }}
        >
          Create Account
        </Typography>

        <Typography
          sx={{
            color: "#7a8496",
            fontSize: "0.95rem",
            mb: 4,
          }}
        >
          Create your account and get started.
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.2,
          }}
        >
          <TextField
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#f8fafc",

                "& fieldset": {
                  borderColor: "#e2e8f0",
                },

                "&:hover fieldset": {
                  borderColor: "#cbd5e1",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3b82f6",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3b82f6",
              },
            }}
          />

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
                borderRadius: "12px",
                backgroundColor: "#f8fafc",

                "& fieldset": {
                  borderColor: "#e2e8f0",
                },

                "&:hover fieldset": {
                  borderColor: "#cbd5e1",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3b82f6",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3b82f6",
              },
            }}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            inputProps={{ minLength: 8 }}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#f8fafc",

                "& fieldset": {
                  borderColor: "#e2e8f0",
                },

                "&:hover fieldset": {
                  borderColor: "#cbd5e1",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3b82f6",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3b82f6",
              },
            }}
          />

          <TextField
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            inputProps={{ minLength: 8 }}
            error={!!error}
            helperText={error}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#f8fafc",

                "& fieldset": {
                  borderColor: "#e2e8f0",
                },

                "&:hover fieldset": {
                  borderColor: "#cbd5e1",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3b82f6",
                },
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3b82f6",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            onClick={handleRegister}
            sx={{
              mt: 1,
              height: 52,
              borderRadius: "12px",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              background: "#2563eb",
              boxShadow: "0 8px 20px rgba(37, 99, 235, 0.22)",
              transition: "all 0.2s ease",

              "&:hover": {
                background: "#1d4ed8",
                transform: "translateY(-1px)",
                boxShadow: "0 10px 24px rgba(37, 99, 235, 0.28)",
              },
            }}
          >
            Register
          </Button>
        </Box>

        <Typography
          textAlign="center"
          mt={3.5}
          sx={{
            color: "#7a8496",
            fontSize: "0.9rem",
          }}
        >
          Already have an account?{" "}
          <Link
            component={RouterLink}
            to="/login"
            underline="hover"
            sx={{
              color: "#2563eb",
              fontWeight: 600,
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>
    </div>
  )
}
