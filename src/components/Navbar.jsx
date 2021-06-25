import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';

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

  const currentUser = useSelector(state => state.auth.currentUser);

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Poetry App
            </Typography>
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
            {!currentUser ? (
              <>
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
              <h2> Hey, {currentUser.username}</h2>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
