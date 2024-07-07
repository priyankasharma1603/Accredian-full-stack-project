
// src/App.js
import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import RewardTable from './components/RewardTable';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box>
      <HeroSection />
      <HowItWorks />
      <RewardTable />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default App;
