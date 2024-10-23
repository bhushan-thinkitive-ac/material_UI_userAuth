import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid2, Paper, TextField, Button, Typography, FormControl, MenuItem } from '@mui/material';

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
                background: 'linear-gradient(90deg, #00253f 0%, #37781b 100%)',
                padding: '40px',
            }}
        >
            <Grid2 item xs={12} sm={10} md={8} lg={6}>
                <Paper elevation={10} sx={{ padding: 6 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Arial', fontWeight: 100, textAlign: 'center', mb: 6, mt: 0 }}>
                        Your Information
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid2 container spacing={2}>
                            <Grid2 item xs={12} md={6}>
                                <div style={{ position: 'relative', display: 'inline-block', width: '80%' }}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        variant="standard"
                                        name="firstName"
                                        required
                                        onChange={handleChange}
                                        InputProps={{
                                            style: {
                                                fontSize: '18px',
                                                fontFamily: 'Arial',
                                                fontStyle: 'italic',
                                                paddingBottom: '5px',
                                            },
                                            disableUnderline: true,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            style: {
                                                fontSize: '14px',
                                                fontFamily: 'Arial',
                                                fontStyle: 'italic',
                                            },
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '3px',
                                        backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                                    }}></div>
                                </div>
                            </Grid2>

                            <Grid2 item xs={12} md={6}>
                                <div style={{ position: 'relative', display: 'inline-block', width: '80%' }}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        variant="standard"
                                        name="lastName"
                                        required
                                        onChange={handleChange}
                                        InputProps={{
                                            style: {
                                                fontSize: '18px',
                                                fontFamily: 'Arial',
                                                fontStyle: 'italic',
                                                paddingBottom: '5px',
                                            },
                                            disableUnderline: true,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            style: {
                                                fontSize: '14px',
                                                fontFamily: 'Arial',
                                                fontStyle: 'italic',
                                            },
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '3px',
                                        backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                                    }}></div>
                                </div>
                            </Grid2>
                        </Grid2>

                        <div style={{ position: 'relative', display: 'inline-block', width: '70%', marginTop: '16px' }}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="standard"
                                type="email"
                                name="email"
                                required
                                onChange={handleChange}
                                InputProps={{
                                    style: {
                                        fontSize: '18px',
                                        fontFamily: 'Arial',
                                        fontStyle: 'italic',
                                        paddingBottom: '5px',
                                    },
                                    disableUnderline: true,
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    style: {
                                        fontSize: '14px',
                                        fontFamily: 'Arial',
                                        fontStyle: 'italic',
                                    },
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '3px',
                                backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                            }}></div>
                        </div>

                        <FormControl sx={{ width: '100%', mt: 2 }}>
                            <Grid2 container spacing={2}>
                                <Grid2 item xs={12} md={6}>
                                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            label="Account"
                                            placeholder="Your practice name"
                                            variant="standard"
                                            name="practiceName"
                                            required
                                            onChange={handleChange}
                                            InputProps={{
                                                style: {
                                                    fontSize: '18px',
                                                    fontFamily: 'Arial',
                                                    fontStyle: 'italic',
                                                    paddingBottom: '5px',
                                                },
                                                disableUnderline: true,
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    fontSize: '14px',
                                                    fontFamily: 'Arial',
                                                    fontStyle: 'italic',
                                                },
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '3px',
                                            backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                                        }}></div>
                                    </div>
                                </Grid2>

                                <Grid2 item xs={12} md={6}>
                                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            select
                                            label="License Type"
                                            placeholder="Optional"
                                            variant="standard"
                                            name="licenseType"
                                            required
                                            value={formData.licenseType}
                                            onChange={handleChange}
                                            InputProps={{
                                                style: {
                                                    fontSize: '18px',
                                                    width: '100px',
                                                    fontFamily: 'Arial',
                                                    fontStyle: 'italic',
                                                    paddingBottom: '5px',
                                                },
                                                disableUnderline: true,
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                style: {
                                                    fontSize: '14px',
                                                    fontFamily: 'Arial',
                                                    fontStyle: 'italic',
                                                    color: 'rgba(0, 0, 0, 0.54)',
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled>
                                                Optional
                                            </MenuItem>
                                            <MenuItem value="MD">MD</MenuItem>
                                            <MenuItem value="DO">DO</MenuItem>
                                        </TextField>

                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '3px',
                                            backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                                        }}></div>
                                    </div>
                                </Grid2>
                            </Grid2>
                        </FormControl>

                        <Grid2 container spacing={2} sx={{ mt: 2 }}>
                            <Grid2 item xs={12} md={6}>
                                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        variant="standard"
                                        name="password"
                                        required
                                        onChange={handleChange}
                                        InputProps={{
                                            style: {
                                                fontSize: '18px',
                                                fontFamily: 'Arial',
                                                paddingBottom: '5px',
                                            },
                                            disableUnderline: true,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            style: {
                                                fontSize: '14px',
                                                fontFamily: 'Arial',
                                                fontStyle: 'italic',
                                            },
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '3px',
                                        backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                                    }}></div>
                                </div>
                            </Grid2>

                            <Grid2 item xs={12} md={6}>
                                <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                    <TextField
                                        fullWidth
                                        label="Confirm Password"
                                        placeholder="Confirm your password"
                                        type="password"
                                        variant="standard"
                                        name="confirmPassword"
                                        required
                                        onChange={handleChange}
                                        InputProps={{
                                            style: {
                                                fontSize: '18px',
                                                fontFamily: 'Arial',
                                                paddingBottom: '5px',
                                            },
                                            disableUnderline: true,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            style: {
                                                fontSize: '14px',
                                                fontFamily: 'Arial',
                                                fontStyle: 'italic',
                                            },
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '3px',
                                        backgroundImage: 'linear-gradient(90deg, #0097B2 0%, #54b629 100%)',
                                    }}></div>
                                </div>
                            </Grid2>
                        </Grid2>

                        <Grid2 container justifyContent="center">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{
                                    mt: 4,
                                    py: 4,
                                    backgroundColor: '#f0f0f0',
                                    color: '#ffffff',
                                    padding: '25px',
                                    fontSize: { xs: '16px', md: '18px' },
                                    textDecoration: 'none',
                                    height: '10px',
                                    width: '250px',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                    border: '0.5px dotted black',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #0097B2 0%, #7ED957 100%)',
                                    },
                                }}
                            >
                                Create Account
                            </Button>
                        </Grid2>
                    </form>
                </Paper>
            </Grid2>
        </Grid2>
    );
};

export default Register;
