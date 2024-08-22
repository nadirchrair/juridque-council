import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';

const AdvancedSearch = ({ theme }) => {
  const [age, setAge] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [nationality, setNationality] = React.useState('');

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const themeInstance = useTheme();
  const isSmallScreen = useMediaQuery(themeInstance.breakpoints.down('sm'));

  return (
    <Box sx={{ alignItems: 'center', mr: isSmallScreen ? 2 : 12 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2 }}>
        بحث متقدم
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="age-label">العمر</InputLabel>
          <Select
            labelId="age-label"
            value={age}
            onChange={(e) => handleChange(e, setAge)}
            label="العمر"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            {/* Add more age options here */}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="profession-label">المهنة</InputLabel>
          <Select
            labelId="profession-label"
            value={profession}
            onChange={(e) => handleChange(e, setProfession)}
            label="المهنة"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            {/* Add more profession options here */}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="religion-label">الديانة</InputLabel>
          <Select
            labelId="religion-label"
            value={religion}
            onChange={(e) => handleChange(e, setReligion)}
            label="الديانة"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            {/* Add more religion options here */}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="experience-label">الخبرة</InputLabel>
          <Select
            labelId="experience-label"
            value={experience}
            onChange={(e) => handleChange(e, setExperience)}
            label="الخبرة"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            {/* Add more experience options here */}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="nationality-label">الجنسية</InputLabel>
          <Select
            labelId="nationality-label"
            value={nationality}
            onChange={(e) => handleChange(e, setNationality)}
            label="الجنسية"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            {/* Add more nationality options here */}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <TextField
          variant="outlined"
          placeholder="بحث"
          sx={{ mt: 1, flex: 2, minWidth: isSmallScreen ? '100%' : 'auto' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" sx={{ height: '40px', mt: 1, minWidth: isSmallScreen ? '100%' : 'auto', p: 3.5 }}>
          تطبيق
        </Button>
      </Box>
    </Box>
  );
};

export default AdvancedSearch;
