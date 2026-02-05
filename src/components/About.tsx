'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export default function About() {
    const highlights = [
        {
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code following best practices',
        },
        {
            icon: <DevicesIcon sx={{ fontSize: 40 }} />,
            title: 'Responsive Design',
            description: 'Beautiful interfaces that work seamlessly on all devices',
        },
        {
            icon: <SpeedIcon sx={{ fontSize: 40 }} />,
            title: 'Performance',
            description: 'Optimized applications for lightning-fast user experiences',
        },
        {
            icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
            title: 'UI/UX Focus',
            description: 'Creating loveable interfaces that users enjoy interacting with',
        },
    ];

    return (
        <Box
            component="section"
            id="about"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        mb: 2,
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    About Me
                </Typography>

                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        mb: 6,
                        color: 'text.secondary',
                        maxWidth: '800px',
                        mx: 'auto',
                        lineHeight: 1.8,
                    }}
                >
                    I&apos;m a passionate Front-End Developer with expertise in building modern, scalable web applications.
                    I specialize in creating user-friendly, responsive interfaces that clients love to use.
                    With a strong focus on clean code and best practices, I deliver high-quality solutions that
                    exceed expectations.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 3,
                    }}
                >
                    {highlights.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 3,
                                height: '100%',
                                textAlign: 'center',
                                background: 'rgba(30, 41, 59, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    border: '1px solid rgba(99, 102, 241, 0.5)',
                                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    color: 'primary.main',
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 1,
                                    fontWeight: 600,
                                    color: 'text.primary',
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
