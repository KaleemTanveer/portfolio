'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                    animation: 'pulse 4s ease-in-out infinite',
                },
                '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.3 },
                    '50%': { opacity: 0.6 },
                },
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4} alignItems="center" textAlign="center" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            opacity: 0,
                            animation: 'fadeInUp 0.8s ease forwards',
                            animationDelay: '0.2s',
                            '@keyframes fadeInUp': {
                                from: { opacity: 0, transform: 'translateY(20px)' },
                                to: { opacity: 1, transform: 'translateY(0)' },
                            },
                        }}
                    >
                        Hello, I&apos;m
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            opacity: 0,
                            animation: 'fadeInUp 0.8s ease forwards',
                            animationDelay: '0.4s',
                        }}
                    >
                        Kaleem Ullah
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            fontWeight: 600,
                            color: 'text.secondary',
                            opacity: 0,
                            animation: 'fadeInUp 0.8s ease forwards',
                            animationDelay: '0.6s',
                        }}
                    >
                        Front-End Developer
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: '800px',
                            color: 'text.secondary',
                            lineHeight: 1.8,
                            opacity: 0,
                            animation: 'fadeInUp 0.8s ease forwards',
                            animationDelay: '0.8s',
                        }}
                    >
                        Building <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>scalable</Box>,
                        <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}> responsive</Box>, and
                        <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}> loveable</Box> web applications
                        with React.js, Next.js, TypeScript, and Material-UI
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{
                            opacity: 0,
                            animation: 'fadeInUp 0.8s ease forwards',
                            animationDelay: '1s',
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                                    transform: 'scale(1.05)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Let&apos;s Work Together
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => scrollToSection('projects')}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    borderColor: 'primary.light',
                                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                    transform: 'scale(1.05)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            View My Work
                        </Button>
                    </Stack>

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            opacity: 0,
                            animation: 'fadeInBounce 1s ease forwards',
                            animationDelay: '1.2s',
                            '@keyframes fadeInBounce': {
                                '0%': { opacity: 0, transform: 'translate(-50%, -20px)' },
                                '100%': { opacity: 1, transform: 'translate(-50%, 0)' },
                            },
                        }}
                    >
                        <ArrowDownwardIcon
                            sx={{
                                fontSize: '2.5rem',
                                color: 'primary.main',
                                animation: 'bounce 2s ease-in-out infinite',
                                '@keyframes bounce': {
                                    '0%, 100%': { transform: 'translateY(0)' },
                                    '50%': { transform: 'translateY(10px)' },
                                },
                                cursor: 'pointer',
                            }}
                            onClick={() => scrollToSection('about')}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
