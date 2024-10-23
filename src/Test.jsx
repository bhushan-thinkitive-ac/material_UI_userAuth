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
                background: 'linear-gradient(90deg, #0097B2 0%, #7ED957 100%)',
            }}
        >
            <Grid2
                item
                xs={12}
                sm={8}
                md={6}
                container
                direction={{ xs: 'column', md: 'row' }}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    overflow: 'hidden',
                    height: { xs: 'auto', md: '65vh' },
                    width: { xs: '90vw', sm: '70vw', md: '55vw' },
                    boxShadow: '0px 2px 50px rgba(0, 0, 0, 0.5)',
                }}
            >
                <Box
                    sx={{
                        flex: 2,
                        backgroundColor: '#1f1f2e',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: { xs: 2, md: 3 },
                    }}
                >
                    <img
                        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F672616f9a6e56be5377750fb39aa2788.cdn.bubble.io%2Ff1695325486924x576377181037805600%2FAdvanta%2520Final%2520%2528Black%2529.png?w=512&h=512&auto=compress&dpr=1.25&fit=max"
                        alt="Logo"
                        style={{
                            width: '100%',
                            maxWidth: { xs: '150px', sm: '200px', md: '500px' },
                            objectFit: 'contain',
                        }}
                    />
                </Box>

                <Paper
                    elevation={10}
                    sx={{
                        flex: 1.6,
                        padding: { xs: 2, sm: 5, md: 8 },
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontFamily: 'Helvetica,Arial,sans-serif',
                            fontStyle: 'bold',
                            fontSize: { xs: '12px', sm: '18px', md: '24px' },
                            marginTop: '10px'
                        }}
                    >
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
                        variant="standard"
                        InputProps={{
                            style: {
                                borderBottom: '3px solid #43e97b',
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                fontFamily: '"Poppins", sans-serif',
                            },
                            disableUnderline: true,
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                fontFamily: 'Helvetica,Arial,sans-serif',
                            },
                        }}
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
                        variant="standard"
                        InputProps={{
                            style: {
                                borderBottom: '3px solid #43e97b',
                                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                fontFamily: 'Helvetica,Arial,sans-serif',
                            },
                            disableUnderline: true,
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                fontFamily: 'Helvetica,Arial,sans-serif',
                            },
                        }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#f0f0f0',
                            color: '#ffffff',
                            padding: '15px 0',
                            fontSize: { xs: '16px', md: '18px' },
                            height: '60px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            borderRadius: '5px',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #0097B2 0%, #7ED957 100%)',
                            },
                        }}
                        onClick={handleLogin}
                    >
                        Continue
                    </Button>

                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            fontSize: { xs: '12px', sm: '14px' },
                        }}
                    >
                        Don't have an account? <Link to="/register">Register Here</Link>
                    </Typography>
                </Paper>
            </Grid2>
        </Grid2>
    );
};

export default Test;
