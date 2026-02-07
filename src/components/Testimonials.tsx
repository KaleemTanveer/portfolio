'use client';

import { Box, Container, Typography, Card, CardContent, Avatar, Stack } from '@mui/material';
import { testimonialsData } from '@/data';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Testimonials() {
    return (
        <Box
            component="section"
            id="testimonials"
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
                        background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Client Testimonials
                </Typography>

                <Typography
                    variant="h6"
                    align="center"
                    sx={{ mb: 8, color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}
                >
                    Don't just take my word for it — here's what my clients have to say about working with me.
                </Typography>

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    sx={{ overflowX: 'auto', pb: 2, pt: 4 }}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <Card
                            key={index}
                            elevation={0}
                            sx={{
                                flex: 1,
                                minWidth: { xs: '100%', md: 'calc(50% - 16px)' },
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: 4,
                                position: 'relative',
                                overflow: 'visible',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -20,
                                    left: 40,
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <FormatQuoteIcon sx={{ color: 'white' }} />
                            </Box>
                            <CardContent sx={{ p: 4, pt: 6 }}>
                                <Typography
                                    variant="body1"
                                    sx={{ mb: 4, color: 'text.secondary', fontStyle: 'italic', fontSize: '1.1rem' }}
                                >
                                    "{testimonial.content}"
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Box>
                                        <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'primary.main' }}>
                                            {testimonial.role}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
