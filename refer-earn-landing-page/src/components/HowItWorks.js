// src/components/HowItWorks.js
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const HowItWorks = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>How It Works</Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography variant="h6" textAlign="center">Step 1</Typography>
          <Typography textAlign="center">Register for the course</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" textAlign="center">Step 2</Typography>
          <Typography textAlign="center">Refer a friend</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" textAlign="center">Step 3</Typography>
          <Typography textAlign="center">Earn rewards</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
