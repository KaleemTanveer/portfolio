'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from 'framer-motion';
import { heroData } from '@/data';
import Typewriter from 'typewriter-effect';

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
            }}
        >
            {/* Background Animations */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                sx={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Stack spacing={4} alignItems="center" textAlign="center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}
                        >
                            {heroData.greeting}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 2,
                            }}
                        >
                            {heroData.name}
                        </Typography>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Typography variant="h3" sx={{ color: 'text.secondary', mb: 3, minHeight: '1.5em' }}>
                            <Typewriter
                                options={{
                                    strings: heroData.roles,
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80,
                                }}
                            />
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                maxWidth: '800px',
                                color: 'text.secondary',
                                lineHeight: 1.8,
                                mx: 'auto',
                            }}
                        >
                            {heroData.descriptionLines.map((line, index) => {
                                if (typeof line === 'string') return line;
                                return (
                                    <Box
                                        key={index}
                                        component="span"
                                        sx={{ color: line.color, fontWeight: 600 }}
                                    >
                                        {line.text}
                                    </Box>
                                );
                            })}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={3}
                            sx={{ mt: 4 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => scrollToSection('contact')}
                                sx={{
                                    px: 5,
                                    py: 1.8,
                                    fontSize: '1.1rem',
                                    borderRadius: '50px',
                                }}
                            >
                                {heroData.cta.primary}
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => scrollToSection('projects')}
                                sx={{
                                    px: 5,
                                    py: 1.8,
                                    fontSize: '1.1rem',
                                    borderRadius: '50px',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    '&:hover': {
                                        borderColor: 'white',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    },
                                }}
                            >
                                {heroData.cta.secondary}
                            </Button>
                        </Stack>
                    </motion.div>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{
                            opacity: { delay: 1.5, duration: 1 },
                            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        sx={{
                            position: 'absolute',
                            bottom: 40,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            cursor: 'pointer',
                        }}
                    >
                        <ArrowDownwardIcon
                            sx={{ fontSize: '2.5rem', color: 'text.secondary' }}
                            onClick={() => scrollToSection('about')}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
