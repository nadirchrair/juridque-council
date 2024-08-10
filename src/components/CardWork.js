import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const CardWork = ({ title, subtitle, items }) => {
  return (
    <Card sx={{ width: 450, textAlign: 'center', margin: '20px',padding:'30px',maxheight:'100%' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px' }}>
        {subtitle}
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
  )
}

export default CardWork