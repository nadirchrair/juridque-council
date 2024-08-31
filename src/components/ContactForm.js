import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Container } from '@mui/material';
import { LocationOn, Phone, Subject, Message } from '@mui/icons-material';

const topics = [
  { value: '1', label: 'موضوع 1' },
  { value: '2', label: 'موضوع 2' },
  { value: '3', label: 'موضوع 3' },
];

const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    topic: '',
    message: '',
  });

  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Set the submitting state to true

    try {
      // Make the API request to submit the form data
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle successful form submission
      console.log('Form submitted successfully!');
      // Optionally, reset form fields
      setFormData({
        fullName: '',
        phone: '',
        topic: '',
        message: '',
      });
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        تواصل معنا
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <TextField
          label="الإسم كامل"
          variant="outlined"
          fullWidth
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          InputProps={{
            startAdornment: <LocationOn sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <TextField
          label="رقم الهاتف"
          variant="outlined"
          fullWidth
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          InputProps={{
            startAdornment: <Phone sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <TextField
          label="الموضوع"
          variant="outlined"
          select
          fullWidth
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          InputProps={{
            startAdornment: <Subject sx={{ color: 'action.active', mr: 1 }} />,
          }}
        >
          {topics.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="اكتب رسالتك"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          InputProps={{
            startAdornment: <Message sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: 'center', mt: 2 }}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'إرسال...' : 'إرسال'}
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
