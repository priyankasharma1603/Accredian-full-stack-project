// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', p: 4 }}>
      <Typography variant="h6" textAlign="center">© 2024 Your Company. All rights reserved.</Typography>
      <Typography textAlign="center">Privacy Policy | Terms of Service</Typography>
    </Box>
  );
};

export default Footer;
