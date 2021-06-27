import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { recoverPassword } from '../redux/auth/recoverPasswordAction';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RecoverPassword = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const isPasswordRecovered = useSelector(
    state => state.recover.isPasswordRecovered
  );
  const history = useHistory();
  let { token } = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(recoverPassword({ resetPasswordToken: token, password }));
    }
  };
  const handleOnChange = e => {
    setRepeatPassword(e.target.value);
    setIsPasswordMatch(password === e.target.value);
  };

  useEffect(() => {
    if (isPasswordRecovered) {
      history.push('/login');
    }
  }, [isPasswordRecovered]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Recover Password
        </Typography>
        <Typography component='subtitle1'>
          Please enter the new Password.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={e => setPassword(e.target.value)}
                variant='outlined'
                required
                fullWidth
                id='password'
                label='Password'
                name='password'
                autoComplete='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleOnChange}
                variant='outlined'
                required
                fullWidth
                id='repeat-password'
                label='Repeat Password'
                name='repeat-password'
                autoComplete='repeat-password'
              />
              {!isPasswordMatch && (
                <div className='SignUp__password-not-match'>
                  Passwords not match
                </div>
              )}
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            SUBMIT
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default RecoverPassword;
