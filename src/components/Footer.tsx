'use client';

import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                background: '#0f172a',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                © {new Date().getFullYear()} Kaleem Ullah. All rights reserved.
            </Typography>
        </Box>
    );
}
