import React from 'react';
import { Box, TextField, Button, MenuItem, Typography, Container } from '@mui/material';
import { LocationOn, Phone, Subject, Message } from '@mui/icons-material';

const topics = [
  { value: '1', label: 'موضوع 1' },
  { value: '2', label: 'موضوع 2' },
  { value: '3', label: 'موضوع 3' },
];

const ContactForm = () => {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3 }}>
        تواصل معنا
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
        <TextField
          label="الإسم كامل"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: <LocationOn sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <TextField
          label="رقم الهاتف"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: <Phone sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <TextField
          label="الموضوع"
          variant="outlined"
          select
          fullWidth
          defaultValue=""
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
          InputProps={{
            startAdornment: <Message sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <Button variant="contained" color="primary" sx={{ alignSelf: 'center', mt: 2 }}>
          إرسال
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
