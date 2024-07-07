// src/components/RewardTable.js
import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const RewardTable = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>Reward Details</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number of Referrals</TableCell>
            <TableCell>Reward</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Rs. 500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>Rs. 2,500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10</TableCell>
            <TableCell>Rs. 5,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default RewardTable;
