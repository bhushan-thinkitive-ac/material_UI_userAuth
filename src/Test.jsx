import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid2, TextField, Button, Typography, Paper } from '@mui/material';

const Test = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const savedUserData = JSON.parse(localStorage.getItem('userData'));

        if (
            savedUserData &&
            savedUserData.email === email &&
            savedUserData.password === password
        ) {
            navigate('/dashboard');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <Grid2
            container
            sx={{
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%)',
            }}
        >
            <Grid2 item xs={12} sm={8} md={6}>
                <Paper elevation={10} sx={{ display: 'flex', borderRadius: 5 }}>
                    <Box
                        sx={{
                            flex: 180,
                            backgroundColor: '#1f1f2e',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px'
                        }}
                    >
                        <img
                            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F672616f9a6e56be5377750fb39aa2788.cdn.bubble.io%2Ff1695325486924x576377181037805600%2FAdvanta%2520Final%2520%2528Black%2529.png?w=512&h=512&auto=compress&dpr=1.25&fit=max"
                            alt="Logo"
                            style={{ width: '80%', maxWidth: '1000px' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 200,
                            padding: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: '10px'
                        }}
                    >
                        <Typography variant="h5" component="h1" gutterBottom>
                            Sign In
                        </Typography>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#ff000',
                                },
                            }}
                            onClick={handleLogin}
                        >
                            Continue
                        </Button>
                        <Typography variant="body2" sx={{ textAlign: 'center' }}>
                            Don't have an account? <Link to="/register">Register Here</Link>
                        </Typography>
                    </Box>
                </Paper>
            </Grid2>
        </Grid2>
    );
};

export default Test;
