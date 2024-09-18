import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';

const AdvancedSearch = ({ onSearch }) => {
  const [judicialCouncil, setJudicialCouncil] = useState('');
  const [role, setRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const themeInstance = useTheme();
  const isSmallScreen = useMediaQuery(themeInstance.breakpoints.down('sm'));

  const handleSearch = () => {
    // Call the search function passed from parent component
    onSearch({ judicialCouncil, role, searchTerm });
  };

  return (
    <Box sx={{ alignItems: 'center', mr: isSmallScreen ? 2 : 12 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2 }}>
        بحث متقدم
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        {/* Judicial Council Filter */}
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="judicialCouncil-label">مجلس القضاء</InputLabel>
          <Select
            labelId="judicialCouncil-label"
            value={judicialCouncil}
            onChange={(e) => setJudicialCouncil(e.target.value)}
            label="مجلس القضاء"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            <MenuItem value="Council1">مجلس القضاء 1</MenuItem>
            <MenuItem value="Council2">مجلس القضاء 2</MenuItem>
            <MenuItem value="Council3">مجلس القضاء 3</MenuItem>
          </Select>
        </FormControl>

        {/* Role Filter */}
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="role-label">الدور</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="الدور"
          >
            <MenuItem value=""><em>الكل</em></MenuItem>
            <MenuItem value="Role1">الدور 1</MenuItem>
            <MenuItem value="Role2">الدور 2</MenuItem>
            <MenuItem value="Role3">الدور 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Search Input */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <TextField
          variant="outlined"
          placeholder="بحث"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mt: 1, flex: 2, minWidth: isSmallScreen ? '100%' : 'auto' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* Apply Button */}
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{ height: '40px', mt: 1, minWidth: isSmallScreen ? '100%' : 'auto', p: 3.5 }}
        >
          تطبيق
        </Button>
      </Box>
    </Box>
  );
};

export default AdvancedSearch;
