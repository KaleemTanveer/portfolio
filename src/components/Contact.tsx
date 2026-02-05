'use client';

import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Contact() {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                    Let&apos;s Build Something Amazing
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
                    Ready to create loveable web applications together? Let&apos;s connect and discuss your next project!
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ maxWidth: '800px', width: '100%' }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                background: 'rgba(30, 41, 59, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                            }}
                        >
                            <Stack spacing={3}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        mb: 3,
                                    }}
                                >
                                    <RocketLaunchIcon
                                        sx={{
                                            fontSize: 64,
                                            color: 'primary.main',
                                            mb: 2,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 2,
                                            color: 'text.primary',
                                        }}
                                    >
                                        Get In Touch
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        I&apos;m currently available for freelance work and exciting projects.
                                        Whether you need a scalable React application, a beautiful Next.js website,
                                        or help with your existing codebase, I&apos;d love to hear from you!
                                    </Typography>
                                </Box>

                                <Stack spacing={2}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href="mailto:kaleem.ullah@example.com"
                                        startIcon={<EmailIcon />}
                                        sx={{
                                            py: 2,
                                            fontSize: '1.1rem',
                                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                                                transform: 'scale(1.02)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Email Me
                                    </Button>

                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            href="https://www.linkedin.com/in/kaleem-ullah"
                                            target="_blank"
                                            startIcon={<LinkedInIcon />}
                                            sx={{
                                                flex: 1,
                                                py: 1.5,
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                                '&:hover': {
                                                    borderColor: 'primary.light',
                                                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                                },
                                            }}
                                        >
                                            LinkedIn
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="large"
                                            href="https://github.com/kaleem-ullah"
                                            target="_blank"
                                            startIcon={<GitHubIcon />}
                                            sx={{
                                                flex: 1,
                                                py: 1.5,
                                                borderColor: 'secondary.main',
                                                color: 'secondary.main',
                                                '&:hover': {
                                                    borderColor: 'secondary.light',
                                                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                                                },
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                    </Stack>
                                </Stack>

                                <Box
                                    sx={{
                                        mt: 4,
                                        pt: 4,
                                        borderTop: '1px solid rgba(99, 102, 241, 0.2)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        Let&apos;s build loveable web applications together!
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    mt: 8,
                    py: 3,
                    borderTop: '1px solid rgba(99, 102, 241, 0.2)',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    © {new Date().getFullYear()} Kaleem Ullah. Built with Next.js, TypeScript, and Material-UI.
                </Typography>
            </Box>
        </Box>
    );
}
