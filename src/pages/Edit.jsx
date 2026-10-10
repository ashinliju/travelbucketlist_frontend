import {
  Paper,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import destination from '../assets/destination.json'
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updatedBucketlistAPI } from "../Service/apiservice";
import Swal from 'sweetalert2'


useNavigate
function Edit() {
  const navigate=useNavigate()
  const location = useLocation();

  // Get the trip clicked in Report
  const trip = location.state?.trip;

  const [bucketlist, setBucketlist] = useState({
    id: trip?.id || "",
    destination: trip?.destination || "",
    traveldate: trip?.traveldate || "",
    returndate: trip?.returndate || "",
    estimatedexp: trip?.estimatedexp || "",
    currency: trip?.currency || "INR",
    notes: trip?.notes || "",
  });

  const handleChange = (e) => {
    setBucketlist({ ...bucketlist,
      [e.target.name]: e.target.value,
    });
  };

const handleSave = async () => {
  try {
    const response = await updatedBucketlistAPI(
      bucketlist.id,
      bucketlist
    );

    console.log("Updated successfully:", response);

Swal.fire({
  title: 'success',
  text: 'successfully changed',
  icon: 'success',
  confirmButtonText: 'Cool'
}) 
  } catch (error) {
    console.error("Error updating trip:", error);
    alert("Failed to update trip");
  }
  navigate('/report')
};

  return (
    <div style={{ padding: "40px" }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 700,
          margin: "auto",
          padding: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 700 }}
        >
          Edit Bucket List ✈️
        </Typography>

        <Stack spacing={3}>

<TextField
  label="Destination"
  name="destination"
  select
  value={bucketlist.destination}
  onChange={handleChange}
  fullWidth
>
{destination.map((place) => (
  <MenuItem key={place.qid} value={place.name}>
    {place.name}
  </MenuItem>
))}
</TextField>

          <TextField
            label="Travel Date"
            name="traveldate"
            type="date"
            value={bucketlist.traveldate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Return Date"
            name="returndate"
            type="date"
            value={bucketlist.returndate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Estimated Expense"
            name="estimatedexp"
            type="number"
            value={bucketlist.estimatedexp}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Currency"
            name="currency"
            select
            value={bucketlist.currency}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="INR">INR ₹</MenuItem>
            <MenuItem value="USD">USD $</MenuItem>
            <MenuItem value="EUR">EUR €</MenuItem>
            <MenuItem value="GBP">GBP £</MenuItem>
          </TextField>

          <TextField
            label="Notes"
            name="notes"
            value={bucketlist.notes}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

          <Button
            onClick={handleSave}
            variant="contained"
            size="large"
          >
            Update Bucket List
          </Button>

        </Stack>
      </Paper>
    </div>
  );
}

export default Edit;