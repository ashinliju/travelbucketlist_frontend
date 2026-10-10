import React, { useState } from "react";
import {
  Paper,
  Typography,
  Divider,
  Stack,
  Box,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { addToHistoryAPI, uploadToCloudinary } from "../Service/apiservice";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function View() {
      const location = useLocation();
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
    

      const handledownloadpdf=async()=>{
        console.log(trip);

        console.log(document.getElementById('result'));
        const canvas=await html2canvas(document.getElementById('result'),{scale:3})
        console.log(canvas);

        const imgData=canvas.toDataURL('img/png')
        console.log(imgData);
        
        const pdf=new jsPDF('p','mm','a4')

        // Define width and height
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Save the PDF
        pdf.save('travel.pdf');

        // Get current date and time
          const timezone = new Date();
          console.log(timezone);

          // Formatted date and time
          const formatedDate = `${timezone.toLocaleDateString()}, ${timezone.toLocaleTimeString()}`;
          console.log(formatedDate);
        

        try{

          const cloudinaryResponse =
          await uploadToCloudinary(imgData);

        console.log("Cloudinary:", cloudinaryResponse);

    // Save only URL in JSON Server
    const response = await addToHistoryAPI({
      ...trip,

      // new history id
      id: Date.now(),

      // original resume id
      // resumeId: resume.id,

      formatedDate:
        `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,

      imageUrl: cloudinaryResponse.secure_url
    });

    console.log("History:", response);
          // const res=await addToHistoryAPI(trip)
          // console.log(res);
        }
        catch(err){
          console.log(err);
          
        }
        
      }


  return (
<div style={{ padding: "40px" }}>
<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    mt: 3,
    p:3
  }}
>
  <Button
    variant="contained"
    startIcon={<FaFileDownload />}
    onClick={handledownloadpdf}
  >
    Download
  </Button>
</Box>
  <Paper
    id='result'
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
       Trip Details
    </Typography>

    <Divider sx={{ mb: 4 }} />

    <Stack spacing={3}>

      {/* Destination */}
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Destination
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          🌍 {bucketlist.destination || "No destination"}
        </Typography>
      </Box>

      {/* Travel Date */}
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Travel Date
        </Typography>

        <Typography variant="h6">
          📅 {bucketlist.traveldate || "Not selected"}
        </Typography>
      </Box>

      {/* Return Date */}
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Return Date
        </Typography>

        <Typography variant="h6">
          📅 {bucketlist.returndate || "Not selected"}
        </Typography>
      </Box>

      {/* Expense */}
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Estimated Expense
        </Typography>

        <Typography variant="h6">
          💰{" "}
          {bucketlist.estimatedexp
            ? `${bucketlist.currency} ${bucketlist.estimatedexp}`
            : "Not entered"}
        </Typography>
      </Box>

      {/* Currency */}
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Currency
        </Typography>

        <Typography variant="h6">
          💱 {bucketlist.currency || "Not selected"}
        </Typography>
      </Box>

      {/* Notes */}
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Notes
        </Typography>

        <Typography variant="h6">
          📝 {bucketlist.notes || "No notes added"}
        </Typography>
      </Box>

    </Stack>
  </Paper>
</div>
  )
}

export default View
