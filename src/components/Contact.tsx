'use client';

import { Box, Container, Typography, Button, Stack, Paper, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { contactData } from '@/data';

// Custom Upwork Icon (Simple SVG representation)
const UpworkIcon = (props: any) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.077.008-.042c.209-1.187.715-2.28 1.488-3.197.8-.951 1.787-1.63 2.955-1.996a5.19 5.19 0 0 1 1.62-.257c2.261 0 4.212 1.95 4.212 4.211 0 1.965-1.465 3.582-3.321 3.96l.194.402c.866 1.832 2.051 3.505 3.554 4.965l-1.657 1.657c-1.673-1.673-3.018-3.568-3.965-5.632l-.568-1.24c-.218.665-.568 1.282-1.028 1.815-1.396 1.616-3.417 2.545-5.545 2.545-2.828 0-5.118-2.257-5.118-5.085V1.24h2.76v7.712c0 1.343 1.054 2.454 2.358 2.454 1.272 0 2.358-1.026 2.358-2.43V1.24h2.76v7.354c0 .324-.038.636-.109.936l-.885 4.304a9.907 9.907 0 0 1-1.602 3.864l1.962 1.576c.725-.909 1.309-1.958 1.713-3.11z" />
    </svg>
);

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
                        mb: 8,
                        color: 'text.secondary',
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    Ready to create loveable web applications together? Let&apos;s connect and discuss your next project!
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ maxWidth: '600px', width: '100%' }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, md: 6 },
                                background: 'rgba(30, 41, 59, 0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                borderRadius: 4,
                                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.5)',
                            }}
                        >
                            <Stack spacing={4} alignItems="center">
                                <Button
                                    variant="contained"
                                    size="large"
                                    href={contactData.upwork}
                                    target="_blank"
                                    startIcon={<UpworkIcon />}
                                    fullWidth
                                    sx={{
                                        py: 2,
                                        fontSize: '1.2rem',
                                        background: '#14a800', // Upwork Green
                                        color: 'white',
                                        '&:hover': {
                                            background: '#108a00',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 8px 16px rgba(20, 168, 0, 0.3)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Hire Me on Upwork
                                </Button>

                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ flex: 1, height: '1px', bgcolor: 'rgba(255,255,255,0.1)' }} />
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>OR</Typography>
                                    <Box sx={{ flex: 1, height: '1px', bgcolor: 'rgba(255,255,255,0.1)' }} />
                                </Box>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    href={`mailto:${contactData.email}`}
                                    startIcon={<EmailIcon />}
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        borderColor: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        '&:hover': {
                                            borderColor: 'white',
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                        },
                                    }}
                                >
                                    Send me an Email
                                </Button>

                                <Stack direction="row" spacing={3} justifyContent="center" sx={{ pt: 2 }}>
                                    <Link
                                        href={contactData.linkedin}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
                                            color: 'text.secondary',
                                            transition: 'color 0.3s',
                                            '&:hover': { color: '#0077b5' }
                                        }}
                                    >
                                        <LinkedInIcon sx={{ fontSize: 32 }} />
                                    </Link>
                                    <Link
                                        href={contactData.github}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
                                            color: 'text.secondary',
                                            transition: 'color 0.3s',
                                            '&:hover': { color: 'white' }
                                        }}
                                    >
                                        <GitHubIcon sx={{ fontSize: 32 }} />
                                    </Link>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
