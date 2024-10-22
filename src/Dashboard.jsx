import React, { useEffect, useState } from 'react';
import { Grid2, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    console.log('Logout function here');
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
      <Grid2 item xs={12} sm={10} md={8}>
        <Paper elevation={10} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Registered Patients
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Disease</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.disease}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 4 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
