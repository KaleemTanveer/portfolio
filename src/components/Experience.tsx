'use client';

import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Experience() {
    const experiences = [
        {
            title: 'Senior Front-End Developer',
            company: 'Freelance (Upwork)',
            period: '2020 - Present',
            description: 'Delivering high-quality front-end solutions for clients worldwide, specializing in React.js and Next.js applications.',
            achievements: [
                'Built 20+ scalable web applications for diverse clients',
                'Maintained 100% client satisfaction with focus on loveable UIs',
                'Specialized in dashboard development and data visualization',
                'Implemented responsive designs and API integrations',
            ],
        },
        {
            title: 'Front-End Developer',
            company: 'Various Projects',
            period: '2018 - 2020',
            description: 'Focused on creating user-friendly interfaces with modern JavaScript frameworks and UI libraries.',
            achievements: [
                'Developed responsive web applications using React and Vue.js',
                'Collaborated with design teams to implement pixel-perfect UIs',
                'Optimized application performance and user experience',
                'Integrated REST APIs and third-party services',
            ],
        },
    ];

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
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
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
                        mb: 6,
                        color: 'text.secondary',
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    My professional journey building exceptional web experiences
                </Typography>

                <Stack spacing={4}>
                    {experiences.map((exp, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                p: 4,
                                background: 'rgba(30, 41, 59, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: '1px solid rgba(99, 102, 241, 0.5)',
                                    transform: 'translateX(8px)',
                                },
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '4px',
                                    background: 'linear-gradient(180deg, #6366f1 0%, #ec4899 100%)',
                                },
                            }}
                        >
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }} sx={{ mb: 2 }}>
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 2,
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <WorkIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                                </Box>
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
                                    <Stack direction="row" spacing={2} flexWrap="wrap">
                                        <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                            {exp.period}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    color: 'text.secondary',
                                    lineHeight: 1.8,
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
