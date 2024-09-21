import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { registerUser, fetchJudicialCouncil, fetchRoles } from "../Fetch"; // Assuming you have these API functions

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Created by E-Saj {" © "} {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(15, 64, 61)",
    },
    secondary: {
      main: "rgb(15, 64, 61)",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default function Register() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [profession, setProfession] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setnumberPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [professionalCardNumber, setprofessionalCardNumber] = useState("");
  const [state, setState] = useState("");
  const [judicialCouncil, setJudicialCouncil] = useState("");
  const [role, setRole] = useState("");
  const [judicialCouncilOptions, setJudicialCouncilOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleRegister = async () => {
    try {
      // Call the external registration function with the form inputs
      await registerUser(
        firstName,
        lastName,
        professionalCardNumber,
        judicialCouncil,  // Pass the selected judicialCouncil ID
        role,             // Pass the selected role ID
        numberPhone,
        email,
        password
      );
  
      // Show success alert and redirect to login after 3 seconds
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/payment");

     //   navigate('/login');
      }, 3000);
    } catch (error) {
      console.error("Registration Error:", error);
      setErr("حدث خطأ أثناء إنشاء الحساب. حاول مرة أخرى.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (numberPhone.length >= 1 && password.length >= 1 && confirmPassword.length >= 1 &&
        password === confirmPassword && firstName.length >= 1 &&
        lastName.length >= 1 && email.length >= 1 && 
        profession.length >= 1 && state.length >= 1 && judicialCouncil && role) {
      handleRegister();  // Call the function to handle registration
      navigate("/payment");
    } else {
      setErr("يرجى إدخال معلومات صحيحة.");
    }
  };

  const Login = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {showAlert && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ mt: '20px' }}>
            تم إنشاء الحساب بنجاح. سيتم تأكيد الحساب وتفعيله بعد تأكيد معلوماتك من الفريق. سيتم التواصل معك عبر رقم هاتفك أو البريد الإلكتروني خلال أيام.
          </Alert>
        )}
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            التسجيل
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="الاسم الأول"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="اسم العائلة"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="البريد الإلكتروني"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="numberPhone"
              label="رقم الهاتف"
              name="numberPhone"
              value={numberPhone}
              onChange={(e) => setnumberPhone(e.target.value)}
            />
            <FormControl fullWidth required margin="normal">
              <InputLabel id="profession-label">المهنة</InputLabel>
              <Select
                labelId="profession-label"
                id="profession"
                value={profession}
                label="المهنة"
                onChange={(e) => setProfession(e.target.value)}
              >
                <MenuItem value="محامي">محامي</MenuItem>
                <MenuItem value="مترجم">مترجم</MenuItem>
              </Select>
            </FormControl>
            {profession && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="professionalCardNumber"
                label={`رقم البطاقة المهنية (${profession})`}
                name="professionalCardNumber"
                type="number"
                value={professionalCardNumber}
                onChange={(e) => setprofessionalCardNumber(e.target.value)}
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="الولاية"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <FormControl fullWidth required margin="normal">
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
            <FormControl fullWidth required margin="normal">
              <InputLabel id="role-label">الدور</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                value={role}
                label="الدور"
                onChange={(e) => setRole(e.target.value)}
              >
                {roleOptions.map((option) => (
                  <MenuItem key={option.id} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth required margin="normal">
              <InputLabel htmlFor="password"    // Aligns the label to the right
>كلمة المرور</InputLabel>
<OutlinedInput
    id="password"
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    
    label="كلمة المرور"
  />
            </FormControl>
            <FormControl fullWidth required margin="normal">
  <InputLabel
    htmlFor="confirm-password"
    // Aligns the label to the right
  >
    تأكيد كلمة المرور
  </InputLabel>
  <OutlinedInput
    id="confirm-password"
    type={showPassword ? "text" : "password"}
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }

    label="تأكيد كلمة المرور"
  />
</FormControl>
            <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
              {err}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              تسجيل حساب
            </Button>
            <Button
              onClick={Login}
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
            >
              لديك حساب؟ سجل الدخول
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
