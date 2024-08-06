// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CollapseItem from './CollapseItem';
import { loginUser } from '../Features/authSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Created by Cherair Nadir {' © '} {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = React.useState(false);

  const { loading, error } = useSelector((state) => state.auth);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const phoneNumber = data.get('phoneNumber');
    const password = data.get('password');
   // console.log("yes2")

    dispatch(loginUser({ phoneNumber, password }))
        //    console.log("yes1")
      //  localStorage.setItem('token', result.token); // Store token in localStorage
      setShowAlert(true); // Show the alert on successful submission
      setTimeout(() => {
        setShowAlert(false); // Hide the alert after a delay
        navigate('/');
      }, 3000); // Adjust the delay as needed
         };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        {showAlert && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
               you add succes login 
              </Alert>
            )}
          <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>  
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='phoneNumber'
                label='phoneNumber'
                name='phoneNumber'
                autoComplete='phone'
                autoFocus
              />
              <FormControl sx={{ mt: 2, width: '100%' }} variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  autoComplete='current-password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
              <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              {loading && <p>Loading...</p>}
              {error && <CollapseItem err={err} />}
            </Box>
          </Box>
          <Copyright sx={{ mt: 4, mb: 2 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
