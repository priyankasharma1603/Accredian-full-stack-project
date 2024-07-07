// src/components/PopupModal.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ReferralForm from './ReferralForm';

const PopupModal = ({ handleClose }) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Refer a Course</Typography>
      <ReferralForm handleClose={handleClose} />
    </Box>
  );
};

export default PopupModal;
