import * as React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#ffffff',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(4),
}));

const AddBlog = () => {
  const [category, setCategory] = React.useState('');
  const [audience, setAudience] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAudienceChange = (event) => {
    setAudience(event.target.value);
  };

  return (
    <Box sx={{ width: 'auto', marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <BlogCard sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            كتابة المقالات القانونية
          </Typography>
          <TextField
            label="عنوان المقال"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="ملخص المقال"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            label="نص المقال"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={10}
          />

          {/* New Category Field */}
          <FormControl fullWidth margin="normal">
            <InputLabel>الفئة</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="الفئة"
            >
              <MenuItem value="القانون المدني">القانون المدني</MenuItem>
              <MenuItem value="القانون الجنائي">القانون الجنائي</MenuItem>
              <MenuItem value="قانون الأسرة">قانون الأسرة</MenuItem>
              <MenuItem value="القانون التجاري">القانون التجاري</MenuItem>
            </Select>
          </FormControl>

          {/* New Tags Field */}
          <TextField
            label="الوسوم (الفصل بين كل وسم بفاصلة)"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* New Audience Filter */}
          <FormControl fullWidth margin="normal">
            <InputLabel>تصفية الجمهور</InputLabel>
            <Select
              value={audience}
              onChange={handleAudienceChange}
              label="تصفية الجمهور"
            >
              <MenuItem value="المحامون">المحامون</MenuItem>
              <MenuItem value="القضاة">القضاة</MenuItem>
              <MenuItem value="الطلاب">الطلاب</MenuItem>
              <MenuItem value="الجمهور العام">الجمهور العام</MenuItem>
            </Select>
          </FormControl>

          {/* New Publicity Options */}
          <FormControlLabel
            control={<Checkbox />}
            label="نشر المقال للعامة"
            sx={{ marginTop: 2 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="إضافة إلى النشرة الإخبارية"
            sx={{ marginTop: 1 }}
          />

          {/* Button Group for Publish and Boost */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <Button variant="outlined" color="secondary">
              Boost
            </Button>
            <Button variant="contained" color="primary">
              نشر المقال
            </Button>
          </Box>
        </CardContent>
      </BlogCard>
    </Box>
  );
}

export default AddBlog;
