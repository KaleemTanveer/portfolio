'use client';

import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { experienceData } from '@/data';

export default function Experience() {
    return (
        <Box
            component="section"
            id="experience"
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
                    Work Experience
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
                    My professional journey building exceptional web experiences
                </Typography>

                <Stack spacing={4} sx={{ maxWidth: '900px', mx: 'auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: 28, md: 40 },
                            top: 20,
                            bottom: 20,
                            width: 2,
                            background: 'linear-gradient(180deg, #6366f1 0%, #ec4899 100%)',
                            opacity: 0.3,
                            zIndex: 0,
                        }}
                    />

                    {experienceData.map((exp, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 4,
                                background: 'rgba(30, 41, 59, 0.4)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: 4,
                                position: 'relative',
                                zIndex: 1,
                                transition: 'all 0.3s ease',
                                ml: { xs: 6, md: 8 },
                                '&:hover': {
                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                    transform: 'translateX(8px)',
                                },
                            }}
                        >
                            {/* Dot */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: -24, md: -34 },
                                    top: 40,
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    background: '#1e293b',
                                    border: '4px solid #6366f1',
                                }}
                            />

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            color: 'text.primary',
                                            mb: 0.5,
                                        }}
                                    >
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1, fontSize: '1.1rem' }}>
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.tertiary', fontStyle: 'italic', mb: 2 }}>
                                        {exp.period}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 2,
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <WorkIcon sx={{ color: 'primary.main' }} />
                                </Box>
                            </Stack>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                }}
                            >
                                {exp.description}
                            </Typography>

                            <Stack spacing={1.5}>
                                {exp.achievements.map((achievement, achievementIndex) => (
                                    <Stack key={achievementIndex} direction="row" spacing={1.5} alignItems="flex-start">
                                        <TrendingUpIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {achievement}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
