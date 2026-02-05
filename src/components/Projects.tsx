'use client';

import { Box, Container, Typography, Card, CardContent, Chip, Stack } from '@mui/material';

export default function Projects() {
    const projects = [
        {
            title: 'Touchtight',
            description: 'Front-end for a comprehensive football club management platform featuring interactive dashboards, animated drill visualizations, and real-time team analytics. Built with React.js and Material-UI for seamless user experience.',
            image: '/touchtight.jpg',
            tags: ['React.js', 'Material-UI', 'Dashboard', 'Animations', 'Sports Tech'],
            features: [
                'Interactive team management dashboards',
                'Animated drill visualizations',
                'Real-time analytics and reporting',
                'Responsive design for mobile coaches',
            ],
        },
        {
            title: 'LiveSmarter',
            description: 'Front-end for an advanced advertisement platform with comprehensive dashboards and analytics tools. Enables users to manage campaigns, track performance metrics, and visualize data with intuitive charts and graphs.',
            image: '/livesmarter.jpg',
            tags: ['Next.js', 'TypeScript', 'Analytics', 'API Integration', 'Dashboard'],
            features: [
                'Campaign management interface',
                'Advanced analytics dashboards',
                'Real-time performance tracking',
                'Data visualization with charts',
            ],
        },
    ];

    return (
        <Box
            component="section"
            id="projects"
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
                    Featured Projects
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
                    Real-world applications showcasing my expertise in building scalable, user-friendly interfaces
                </Typography>

                <Stack spacing={4}>
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            elevation={0}
                            sx={{
                                background: 'rgba(30, 41, 59, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: '1px solid rgba(99, 102, 241, 0.5)',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: { xs: 250, md: 400 },
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.3)',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                </Box>

                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 700,
                                            color: 'text.primary',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                mb: 1.5,
                                                fontWeight: 600,
                                                color: 'primary.main',
                                            }}
                                        >
                                            Key Features:
                                        </Typography>
                                        <Stack spacing={1}>
                                            {project.features.map((feature, featureIndex) => (
                                                <Typography
                                                    key={featureIndex}
                                                    variant="body2"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        pl: 2,
                                                        '&:before': {
                                                            content: '"→"',
                                                            color: 'primary.main',
                                                            marginRight: 1,
                                                            fontWeight: 700,
                                                        },
                                                    }}
                                                >
                                                    {feature}
                                                </Typography>
                                            ))}
                                        </Stack>
                                    </Box>

                                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tags.map((tag, tagIndex) => (
                                            <Chip
                                                key={tagIndex}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                                                    color: 'text.primary',
                                                    fontWeight: 500,
                                                    border: '1px solid rgba(99, 102, 241, 0.3)',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Box>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
