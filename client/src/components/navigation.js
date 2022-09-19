import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as Icons from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import {Typography, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import * as M from '@mui/material'

const drawerWidth = 240;

function Navigation(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  var handleSignOut = () => {
    console.log("Hey");
    localStorage.removeItem("userInformaion");
    window.location.reload();
    
  }

    var [docs, setDocs] = React.useState(["سجل الغياب", "كشوف الطلاب"]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    

  var drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={"text"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icons.Archive />
            </ListItemIcon>
            <ListItemText primary={"الأرشيف"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"text"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icons.Group />
            </ListItemIcon>
            <ListItemText primary={"الطلاب"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"text"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Icons.Group />
            </ListItemIcon>
            <ListItemText primary={"المعلمين"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"text"} disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Icons.ManageAccounts />
            </ListItemIcon>
            <ListItemText primary={"حسابك"} />
          </ListItemButton>
          <M.Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          
        >
          <M.MenuItem onClick={handleClose}>الإعدادات</M.MenuItem>
          <M.MenuItem onClick={handleSignOut}>تسجيل الخروج</M.MenuItem>
        </M.Menu>
        </ListItem>
        <ListItem key={"text"} disablePadding>
            <Accordion sx={{width: "100%"}}>
                <AccordionSummary
                expandIcon={<Icons.ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>السجلات</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    {docs.map(e => 
                        <ListItem key={"text"} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={e} />
                            </ListItemButton>
                        </ListItem>
                        )}
                        <ListItem key={"text"} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={"إضافة سجل جديد +"} />
                        </ListItemButton>
                    </ListItem>
                </List>
                </AccordionDetails>
            </Accordion>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
        <Typography variant="h6" sx={{flexGrow: 1}} gutterBottom>
            منصة الإرشاد الطلابي SGP
        </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Icons.Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default Navigation;
