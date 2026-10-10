import { Box, Stack } from '@mui/material'
import React from 'react'
import Preview from '../components/Preview'
import BucketListInputs from '../components/BucketListInputs'
import { useLocation } from 'react-router-dom'


export default function BucketList() {
    const location=useLocation()
    const [bucketlist,setBucketlist]=React.useState({
         destination: location.state?.destination || "",
        traveldate:'',
        returndate:'',
        estimatedexp:'',
        currency:'',
        notes:''

    })

  return (
    <div>
          <Stack
      direction="row"
      spacing={8}
      sx={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        mx: 10,
        my: 10,
      }}
    >
      <Box>
      <BucketListInputs
        bucketlist={bucketlist}
        setBucketlist={setBucketlist}
      />
      </Box>

      <Box>

      <Preview
        bucketlist={bucketlist}
      />

      </Box>
    </Stack>
    </div>
  )
}
