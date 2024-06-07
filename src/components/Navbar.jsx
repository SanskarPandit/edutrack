// src/components/Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Course List', path: '/' },
        { text: 'Dashboard', path: '/dashboard' }
    ];

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        EduTrack
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.text}
                                color="inherit"
                                component={Link}
                                to={item.path}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} component={Link} to={item.path} onClick={toggleDrawer(false)}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;
