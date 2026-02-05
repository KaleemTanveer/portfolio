'use client';

import { Box, Container, Typography, Paper, Chip } from '@mui/material';

export default function Skills() {
    const skillCategories = [
        {
            category: 'Frontend Frameworks',
            skills: ['React.js', 'Next.js', 'Vue.js'],
        },
        {
            category: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
        },
        {
            category: 'UI Libraries',
            skills: ['Material-UI', 'Tailwind CSS', 'Chakra UI', 'Bootstrap'],
        },
        {
            category: 'Tools & Others',
            skills: ['Git', 'REST APIs', 'GraphQL', 'Responsive Design', 'Performance Optimization'],
        },
    ];

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
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
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
                        mb: 6,
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
                            elevation={0}
                            sx={{
                                p: 4,
                                height: '100%',
                                background: 'rgba(30, 41, 59, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: '1px solid rgba(99, 102, 241, 0.5)',
                                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    fontWeight: 600,
                                    color: 'primary.main',
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
                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '0.95rem',
                                            px: 1,
                                            py: 2.5,
                                            border: '1px solid rgba(99, 102, 241, 0.3)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)',
                                                transform: 'translateY(-2px)',
                                                border: '1px solid rgba(99, 102, 241, 0.6)',
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
