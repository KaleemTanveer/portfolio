'use client';

import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={trigger ? 4 : 0}
                sx={{
                    background: trigger ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
                    backdropFilter: trigger ? 'blur(10px)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography
                            variant="h6"
                            component="a"
                            href="#hero"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('hero');
                            }}
                            sx={{
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                cursor: 'pointer',
                                textDecoration: 'none',
                            }}
                        >
                            KU
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href.substring(1))}
                                    sx={{
                                        color: 'text.primary',
                                        '&:hover': {
                                            color: 'primary.main',
                                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 240,
                        background: '#1e293b',
                    },
                }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton onClick={() => scrollToSection(item.href.substring(1))}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Toolbar /> {/* Spacer */}
        </>
    );
}
