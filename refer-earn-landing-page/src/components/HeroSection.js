// src/components/HeroSection.js
import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import PopupModal from './PopupModal';

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ textAlign: 'center', p: 4, backgroundColor: '#f0f4ff' }}>
      <Typography variant="h2">Let's Learn & Earn</Typography>
      <Typography variant="h5">Get a chance to win up to Rs. 15,000</Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>Refer Now</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ p: 4, backgroundColor: 'white', margin: '10% auto', width: '50%' }}>
          <PopupModal handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default HeroSection;
