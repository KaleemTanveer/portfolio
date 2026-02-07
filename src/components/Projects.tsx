'use client';

import { Box, Container, Typography, Card, CardContent, Chip, Stack, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Projects() {
    const projects = [
        {
            title: 'Touchtight',
            description: 'Full-stack football club management platform featuring interactive dashboards, animated drill visualizations, real-time team analytics, and secure backend services. Built with React.js, Material-UI, Node.js, and PostgreSQL for a seamless user experience and robust data handling.',
            image: '/touchtight.jpg',
            tags: ['React.js', 'Material-UI', 'Node.js', 'PostgreSQL', 'GraphQL', 'Dashboard', 'graphQL'],
            features: [
                'Interactive team management dashboards',
                'Animated drill visualizations',
                'Real-time analytics and reporting',
                'Secure authentication system',
                'Responsive cross-platform design',
                'Complex specific drill database management',
            ],
            links: {
                github: '#',
                demo: '#'
            }
        },
        {
            title: 'LiveSmarter',
            description: 'Full-stack advertisement management platform with advanced dashboards, analytics tools, and backend services to manage campaigns, track performance, and visualize data. Built with Next.js, TypeScript, Node.js, and MongoDB for efficient data handling and real-time updates.',
            image: '/livesmarter.jpg',
            tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Analytics', 'Dashboard', 'API Integration'],
            features: [
                'Campaign management interface',
                'Advanced analytics dashboards',
                'Real-time data visualization',
                'Role-based access control',
                'Automated reporting system',
                'High-performance data handling',
            ],
            links: {
                github: '#',
                demo: '#'
            }
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <Box
            component="section"
            id="projects"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decorative elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
                    borderRadius: '50%',
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
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mb: 2,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        Featured Projects
                    </Typography>

                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            mb: 8,
                            color: 'text.secondary',
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                        }}
                    >
                        Building digital experiences that combine robust engineering with stunning design.
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 4,
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'rgba(30, 41, 59, 0.4)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                                        border: '1px solid rgba(99, 102, 241, 0.3)',
                                        '& .project-image': {
                                            transform: 'scale(1.05)',
                                        }
                                    },
                                }}
                            >
                                {/* Image Section */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: 240,
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                                    }}
                                >
                                    <Box
                                        className="project-image"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            background: `
                                            radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
                                            radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)
                                        `,
                                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontWeight: 900,
                                                opacity: 0.05,
                                                fontSize: '8rem',
                                                textTransform: 'uppercase',
                                                background: 'linear-gradient(to bottom, #fff, transparent)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                userSelect: 'none',
                                            }}
                                        >
                                            {index + 1}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Content Section */}
                                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 700,
                                                background: 'linear-gradient(90deg, #fff 0%, #cbd5e1 100%)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        {/* <Stack direction="row" spacing={1}>
                                            <Tooltip title="View Code">
                                                <IconButton
                                                    size="small"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        '&:hover': { color: 'primary.main', background: 'rgba(99, 102, 241, 0.1)' }
                                                    }}
                                                >
                                                    <GitHubIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="View Demo">
                                                <IconButton
                                                    size="small"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        '&:hover': { color: 'primary.main', background: 'rgba(99, 102, 241, 0.1)' }
                                                    }}
                                                >
                                                    <LaunchIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        </Stack> */}
                                    </Stack>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            lineHeight: 1.6,
                                            flexGrow: 1,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Stack direction="row" flexWrap="wrap" gap={1}>
                                        {project.tags.map((tag, tagIndex) => (
                                            <Chip
                                                key={tagIndex}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    background: 'rgba(99, 102, 241, 0.1)',
                                                    color: '#e2e8f0',
                                                    border: '1px solid rgba(99, 102, 241, 0.2)',
                                                    borderRadius: '6px',
                                                    fontSize: '0.7rem',
                                                    height: '24px',
                                                }}
                                            />
                                        ))}
                                        {/* {project.tags.length > 4 && (
                                            <Chip
                                                label={`+${project.tags.length - 4}`}
                                                size="small"
                                                sx={{
                                                    background: 'transparent',
                                                    color: 'text.secondary',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    borderRadius: '6px',
                                                    fontSize: '0.7rem',
                                                    height: '24px',
                                                }}
                                            />
                                        )} */}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
