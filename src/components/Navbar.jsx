import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth/signupAction';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 4,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.currentUser);

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Poetry App
            </Typography>
            {!currentUser ? (
              <>
                <Box mr={3}>
                  <Button
                    component={Link}
                    to='/'
                    color='secondary'
                    variant='contained'
                  >
                    Home
                  </Button>
                </Box>
                <Box mr={3}>
                  <Button
                    component={Link}
                    to='/signup'
                    color='secondary'
                    variant='contained'
                  >
                    Signup
                  </Button>
                </Box>
                <Box mr={3}>
                  <Button
                    component={Link}
                    to='/login'
                    color='secondary'
                    variant='contained'
                  >
                    Login
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <h2> Hey, {currentUser.username}</h2>
                <Box mr={3}>
                  <Button
                    component={Link}
                    to='/post-poem'
                    color='secondary'
                    variant='contained'
                  >
                    New Poem
                  </Button>
                </Box>
                <Box mr={3}>
                  <Button
                    component={Link}
                    to='/'
                    color='secondary'
                    variant='contained'
                  >
                    Home
                  </Button>
                </Box>
                <Box mr={3}>
                  <Button
                    component={Link}
                    to='/'
                    onClick={() => {
                      dispatch(logout());
                    }}
                    color='secondary'
                    variant='contained'
                  >
                    Logout
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
