// src/components/ReferralForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const ReferralForm = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
    },
    validationSchema: Yup.object({
      referrerName: Yup.string().required('Required'),
      referrerEmail: Yup.string().email('Invalid email address').required('Required'),
      refereeName: Yup.string().required('Required'),
      refereeEmail: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('/api/referrals', values);
        handleClose();
      } catch (error) {
        console.error('Error adding referral:', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Referrer Name"
        name="referrerName"
        value={formik.values.referrerName}
        onChange={formik.handleChange}
        error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
        helperText={formik.touched.referrerName && formik.errors.referrerName}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Referrer Email"
        name="referrerEmail"
        value={formik.values.referrerEmail}
        onChange={formik.handleChange}
        error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
        helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Referee Name"
        name="refereeName"
        value={formik.values.refereeName}
        onChange={formik.handleChange}
        error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
        helperText={formik.touched.refereeName && formik.errors.refereeName}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Referee Email"
        name="refereeEmail"
        value={formik.values.refereeEmail}
        onChange={formik.handleChange}
        error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
        helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default ReferralForm;
