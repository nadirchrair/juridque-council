import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const AdvancedSearch = ({theme}) => {
  const [age, setAge] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [nationality, setNationality] = React.useState('');

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <Box sx={{ alignItems: 'center',  mr:12  }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,mb:2}}>
        بحث متقدم
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>  
           <FormControl variant="outlined" sx={{ minWidth: 120 }}>
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
      <FormControl variant="outlined" sx={{ minWidth: 140 }}>
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
      <FormControl variant="outlined" sx={{ minWidth: 140 }}>
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
      <FormControl variant="outlined" sx={{ minWidth: 140 }}>
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
      <FormControl variant="outlined" sx={{ minWidth: 140 }}>
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
      <Button variant="contained"  sx={{ height: '40px',p:3.5  }}>
        تطبيق
      </Button>
     
      </Box>
      <Box>
      <TextField
        variant="outlined"
        placeholder="بحث"
        sx={{ mt: 4,mr:9,minWidth:580 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      </Box>
 
    </Box>
  );
};

export default AdvancedSearch;
