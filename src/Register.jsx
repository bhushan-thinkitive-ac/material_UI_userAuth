import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid2, Paper, TextField, Button, Typography, FormControl, Select, MenuItem } from '@mui/material';


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        practiceName: '',
        licenseType: '',
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
                background: 'linear-gradient(90deg, #00253f 0%, #0d7a4e 100%)',
                padding: '20px',
            }}
        >
            <Grid2 item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={10} sx={{ padding: 4, borderRadius: 2 }}>
                    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                        Your Information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid2 container spacing={2}>
                            <Grid2 item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    name="firstName"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 item xs={12} md={6}>
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
                            label="Your Practice Name"
                            variant="outlined"
                            name="practiceName"
                            required
                            sx={{ mt: 2 }}
                            onChange={handleChange}
                        />

                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <Select
                                value={formData.licenseType}
                                onChange={handleChange}
                                name="licenseType"
                                displayEmpty
                                variant="outlined"
                            >
                                <MenuItem value="" disabled>License Type (Optional)</MenuItem>
                                <MenuItem value="MD">MD</MenuItem>
                                <MenuItem value="DO">DO</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            label="NPI (Optional)"
                            variant="outlined"
                            name="npi"
                            sx={{ mt: 2 }}
                            onChange={handleChange}
                        />

                        <Grid2 container spacing={2} sx={{ mt: 2 }}>
                            <Grid2 item xs={12} md={6}>
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
                            <Grid2 item xs={12} md={6}>
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
                            type="submit"
                            sx={{
                                mt: 3,
                                py: 1.5,
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
                        >
                            Create Account
                        </Button>
                    </form>

                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            fontFamily: 'Times New Roman, serif',
                            fontSize: 'larger',
                            border: '2px solid darkblue',
                            background: 'fff',
                            borderRadius: '10px',
                            boxSizing: 'border-box',
                            padding: '5px',
                            margin: '10px 0',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #0097B2 0%, #7ED957 100%)',
                            },
                        }}
                    >
                        Already Registered? <br />
                        <Link to="/">Login here</Link>
                    </Typography>
                </Paper>
            </Grid2>
        </Grid2>
    );
};

export default Register;
