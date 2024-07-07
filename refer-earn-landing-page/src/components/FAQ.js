// src/components/FAQ.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>Frequently Asked Questions</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I refer a course?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>To refer a course, click the "Refer Now" button and fill in the form with the necessary details.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What rewards can I earn?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Rewards are based on the number of referrals. Please check the reward table for detailed information.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
