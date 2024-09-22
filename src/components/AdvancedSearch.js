import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { fetchJudicialCouncil, fetchRoles } from '../Fetch';

const AdvancedSearch = forwardRef(({ onSearch }, ref) => {
  const [judicialCouncil, setJudicialCouncil] = useState("");
  const [role, setRole] = useState("");
  const [judicialCouncilOptions, setJudicialCouncilOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);
  const [err, setErr] = useState("");

  const themeInstance = useTheme();
  const isSmallScreen = useMediaQuery(themeInstance.breakpoints.down('sm'));

  // Expose search function to parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    handleSearch() {
      onSearch({ judicialCouncil, role });
    }
  }));

  useEffect(() => {
    // Fetch data for judicial councils and roles
    const loadData = async () => {
      try {
        const judicialCouncilData = await fetchJudicialCouncil();
        setJudicialCouncilOptions(judicialCouncilData);

        const roleData = await fetchRoles();
        setRoleOptions(roleData);
      } catch (error) {
        console.error("Error fetching data", error);
        setErr("حدث خطأ أثناء تحميل البيانات.");
      }
    };

    loadData();
  }, []);

  return (
    <Box sx={{ alignItems: 'center', mr: isSmallScreen ? 2 : 12 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2 }}>
        بحث متقدم
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="judicialCouncil-label">المجلس القضائي</InputLabel>
          <Select
            labelId="judicialCouncil-label"
            id="judicialCouncil"
            value={judicialCouncil}
            label="المجلس القضائي"
            onChange={(e) => setJudicialCouncil(e.target.value)}
          >
            {judicialCouncilOptions.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: isSmallScreen ? '100%' : 140, flex: 1 }}>
          <InputLabel id="role-label">الدور</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={role}
            label="الدور"
            onChange={(e) => setRole(e.target.value)}
          >
            {roleOptions.map((option) => (
              <MenuItem key={option._id} value={option._id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Button
        variant="contained"
        onClick={() => onSearch({ judicialCouncil, role })} // Directly pass the filters when clicking "تطبيق"
        sx={{ height: '40px', mt: 1, minWidth: isSmallScreen ? '100%' : 'auto', p: 3.5 }}
      >
        تطبيق
      </Button>
    </Box>
  );
});

export default AdvancedSearch;
