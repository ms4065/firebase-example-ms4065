import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignInOutButton from './SignInOutButton';
import { Avatar } from '@mui/material';
import { useUser } from 'reactfire';



export default function Navbar() {
  const { status, data: user } = useUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat
          </Typography>
          <SignInOutButton color="inherit" />
          {user && <Avatar alt="Remy Sharp" src={user.photoURL} />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
