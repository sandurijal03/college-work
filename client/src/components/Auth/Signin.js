import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';

import useForm from '../../lib/useForm';
import Error from '../../lib/Error';
import Copyright from './Copyright';
import { useStyles } from './styles';
import { SIGNIN_USER } from '../../queries';

const Signin = ({ history, refetch }) => {
  const classes = useStyles();

  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const [signinUser, { loading, error }] = useMutation(SIGNIN_USER, {
    variables: inputs,
  });

  const validateForm = () => {
    const isInvalid = !email || !password;
    return isInvalid;
  };

  const handleSubmit = async (e, signinUser) => {
    e.preventDefault();
    signinUser().then(async ({ data }) => {
      localStorage.setItem('token', data.signinUser.token);
      toast.success('Logged in succesfully.');

      await refetch();
      clearForm();
      history.push('/');
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => handleSubmit(e, signinUser)}
        >
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            type='email'
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={handleChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading || validateForm()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/signup' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && <Error message={error.message} />}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Signin);
