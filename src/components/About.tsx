'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from 'framer-motion';
import { aboutHighlights } from '@/data';

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'code': return <CodeIcon sx={{ fontSize: 40 }} />;
        case 'devices': return <DevicesIcon sx={{ fontSize: 40 }} />;
        case 'speed': return <SpeedIcon sx={{ fontSize: 40 }} />;
        case 'design': return <DesignServicesIcon sx={{ fontSize: 40 }} />;
        default: return <CodeIcon sx={{ fontSize: 40 }} />;
    }
};

export default function About() {
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
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
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
                            mb: 8,
                            color: 'text.secondary',
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.8,
                        }}
                    >
                        I&apos;m a passionate Full-Stack Developer with expertise in building modern, scalable web applications.
                        I specialize in creating user-friendly, responsive interfaces that clients love to use.
                        With a strong focus on clean code and best practices, I deliver high-quality solutions that
                        exceed expectations.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                        gap: 4,
                    }}
                >
                    {aboutHighlights.map((item, index) => (
                        <Paper
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            elevation={0}
                            sx={{
                                p: 4,
                                height: '100%',
                                textAlign: 'center',
                                background: 'rgba(30, 41, 59, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: 4,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    border: '1px solid rgba(99, 102, 241, 0.4)',
                                    boxShadow: '0 12px 30px rgba(99, 102, 241, 0.2)',
                                    background: 'rgba(30, 41, 59, 0.6)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    color: 'primary.main',
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    p: 2,
                                    borderRadius: '50%',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    width: 'fit-content',
                                    mx: 'auto',
                                    marginBottom: 3,
                                }}
                            >
                                {getIcon(item.icon)}
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 1.5,
                                    fontWeight: 700,
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
