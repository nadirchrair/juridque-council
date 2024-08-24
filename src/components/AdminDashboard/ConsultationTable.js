import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const createData = (clientName, requestDate, status) => {
  return { clientName, requestDate, status };
};

const rows = [
  createData('أحمد محمد', '2024-08-20', 'معلق'),
  createData('سارة علي', '2024-08-18', 'مكتمل'),
  createData('يوسف عبدالله', '2024-08-15', 'قيد التنفيذ'),
  createData('فاطمة سعيد', '2024-08-10', 'معلق'),
  createData('علي حسن', '2024-08-05', 'ملغي'),
];

const ConsultationTable = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 'auto', marginTop: '50px', padding: '20px' }}>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          قائمة الاستشارات
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="consultation table">
            <TableHead>
              <TableRow>
                <TableCell align="right">اسم العميل</TableCell>
                <TableCell align="right">تاريخ الطلب</TableCell>
                <TableCell align="right">الحالة</TableCell>
                <TableCell align="right">إجراءات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="right">{row.clientName}</TableCell>
                  <TableCell align="right">{row.requestDate}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" color="primary" sx={{ marginRight: 1 }}>
                      عرض
                    </Button>
                    <Button variant="outlined" color="secondary">
                      إلغاء
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
}

export default ConsultationTable;
