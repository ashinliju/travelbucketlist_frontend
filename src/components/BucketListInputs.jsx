import React from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  MenuItem,
} from "@mui/material";
import { addBucketlistAPI } from "../Service/apiservice";
import Swal from 'sweetalert2'


export default function BucketListInputs({
  bucketlist,
  setBucketlist,
}) {

  const handlesave=async()=>{
    try{
        const res =await addBucketlistAPI(bucketlist)
        console.log(res);
Swal.fire({
  title: 'success',
  text: 'BucketList added successfully',
  icon: 'success',
  confirmButtonText: 'Done'
}) 
        
    }
    catch(err){
      console.log(err);
      
    }
  }
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
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
          Add to Bucket List ✈️
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Fill in your travel details
        </Typography>

        <Stack spacing={3}>

          {/* Destination */}
          <TextField
            label="Destination"
            placeholder="Enter destination"
            value={bucketlist.destination}
            fullWidth
          />

          {/* Travel Date */}
          <TextField
            label="Travel Date"
            type="date"
            value={bucketlist.traveldate}
            onChange={(e) =>
              setBucketlist({
                ...bucketlist,
                traveldate: e.target.value,
              })
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* Return Date */}
          <TextField
            label="Return Date"
            type="date"
            value={bucketlist.returndate}
            onChange={(e) =>
              setBucketlist({
                ...bucketlist,
                returndate: e.target.value,
              })
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* Estimated Expense */}
          <TextField
            label="Estimated Expense"
            type="number"
            placeholder="Enter amount"
            value={bucketlist.estimatedexp}
            onChange={(e) =>
              setBucketlist({
                ...bucketlist,
                estimatedexp: e.target.value,
              })
            }
            fullWidth
          />

          {/* Currency */}
          <TextField
            label="Currency"
            select
            value={bucketlist.currency}
            onChange={(e) =>
              setBucketlist({
                ...bucketlist,
                currency: e.target.value,
              })
            }
            fullWidth
          >
            <MenuItem value="INR">INR ₹</MenuItem>
            <MenuItem value="USD">USD $</MenuItem>
            <MenuItem value="EUR">EUR €</MenuItem>
            <MenuItem value="GBP">GBP £</MenuItem>
          </TextField>

          {/* Notes */}
          <TextField
            label="Notes"
            placeholder="Add your travel plans..."
            multiline
            rows={4}
            value={bucketlist.notes}
            onChange={(e) =>
              setBucketlist({
                ...bucketlist,
                notes: e.target.value,
              })
            }
            fullWidth
          />

          <Button
          onClick={handlesave}
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              borderRadius: 2,
              fontSize: "16px",
            }}
          >
            Save to Bucket List
          </Button>

        </Stack>
      </Paper>
    </div>
  );
}