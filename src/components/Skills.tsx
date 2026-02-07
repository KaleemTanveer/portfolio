'use client';

import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data';

export default function Skills() {
    return (
        <Box
            component="section"
            id="skills"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        mb: 2,
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Skills & Expertise
                </Typography>

                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        mb: 8,
                        color: 'text.secondary',
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    Technologies and tools I use to bring ideas to life
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                        gap: 4,
                    }}
                >
                    {skillCategories.map((category, index) => (
                        <Paper
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            elevation={0}
                            sx={{
                                p: 4,
                                height: '100%',
                                background: 'rgba(30, 41, 59, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: 4,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    fontWeight: 700,
                                    color: 'primary.main',
                                    borderBottom: '2px solid rgba(99, 102, 241, 0.2)',
                                    pb: 1,
                                    display: 'inline-block',
                                }}
                            >
                                {category.category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        label={skill}
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            px: 1,
                                            py: 2.5,
                                            border: '1px solid rgba(99, 102, 241, 0.2)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(236, 72, 153, 0.25) 100%)',
                                                transform: 'translateY(-2px) scale(1.05)',
                                                border: '1px solid rgba(99, 102, 241, 0.4)',
                                                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
