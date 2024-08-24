import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

export default function TemporaryDrawer({ status, setStatus }) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(status);
  }, [status]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setStatus(newOpen);
  };

  const getIconComponent = (index) => {
    switch (index) {
      case 0:
        return <PersonIcon />;
      case 1:
        return <DescriptionIcon />;
      case 2:
        return <ArticleIcon />;
      case 3:
        return <HelpIcon />;
      case 4:
        return <GroupAddIcon />;
      default:
        return null;
    }
  };

  const clickComponent = (index) => {
    switch (index) {
      case 0:
        navigate("profile");
        break;
      case 1:
        navigate("documents");
        break;
      case 2:
        navigate("write-article");
        break;
      case 3:
        navigate("consultations");
        break;
      case 4:
        navigate("join-us");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["المستندات", "كتابة مقال", "الاستشارات", "انضم لنا","تسجيل الخروج"].map(
          (text, index) => (
            <ListItem key={text} onClick={() => navigate(`/admin/${text}`)} disablePadding>
              <ListItemButton >
                <ListItemIcon>{getIconComponent(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </ThemeProvider>
  );
}
