import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid2, Paper, TextField, Button, Typography } from '@mui/material';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        disease: '',
        npi: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        localStorage.setItem('userData', JSON.stringify({
            email: formData.email,
            password: formData.password,
        }));

        console.log('User data:', formData);
        navigate('/');
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
            <Grid2 item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={10} sx={{ padding: 4, borderRadius: 2 }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                        Patient Information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid2 container spacing={2}>
                            <Grid2 item xs={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    name="firstName"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    variant="outlined"
                                    name="lastName"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </Grid2>
                        <TextField
                            fullWidth
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            name="email"
                            required
                            sx={{ mt: 2 }}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Disease"
                            variant="outlined"
                            name="disease"
                            required
                            sx={{ mt: 2 }}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="NPI"
                            variant="outlined"
                            name="npi"
                            sx={{ mt: 2 }}
                            onChange={handleChange}
                        />
                        <Grid2 container spacing={2} sx={{ mt: 2 }}>
                            <Grid2 item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    name="password"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    type="password"
                                    variant="outlined"
                                    name="confirmPassword"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </Grid2>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                            type="submit"
                        >
                            Register
                        </Button>
                    </form>
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'Times New Roman, serif',
                            fontSize: 'larger',
                            border: '2px solid darkblue',
                            background: 'lightblue',
                            borderRadius: '10px',
                            boxSizing: 'border-box',
                            padding: '10px',
                            margin: '10px',
                        }}
                    >
                        Already Registered? <br />
                        <Link to="/">Login here </Link>
                    </Typography>
                </Paper>
            </Grid2>
        </Grid2>
    );
};

export default Register;
