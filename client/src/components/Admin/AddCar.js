import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import {
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  makeStyles,
} from '@material-ui/core';

import useForm from '../../lib/useForm';
import Error from '../../lib/Error';
import { ADD_CAR, GET_ALL_CARS } from '../../queries';
import withAuth from '../withAuth';

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
    },
    '& .MuiFormLabel-root': {
      paddingLeft: '0.3em',
    },
  },
}));

const AddCar = ({ history }) => {
  const classes = useStyle();

  const { inputs, handleChange, clearForm } = useForm({
    brand: '',
    description: '',
    category: '',
    model: '',
    isAvailable: '',
    imageUrl: '',
    seat: '',
    age: '',
    price: '',
    ac: '',
  });

  const {
    brand,
    description,
    category,
    model,
    imageUrl,
    isAvailable,
    seat,
    age,
    price,
    ac,
  } = inputs;

  const validateForm = () => {
    const isInvalid =
      !brand ||
      !description ||
      !model ||
      !category ||
      !isAvailable ||
      !imageUrl ||
      !seat ||
      !ac ||
      !age ||
      !price;
    return isInvalid;
  };

  const updateCache = (cache, { data: { addCar } }) => {
    const { getAllCars } = cache.readQuery({ query: GET_ALL_CARS });

    cache.writeQuery({
      query: GET_ALL_CARS,
      data: {
        getAllCars: getAllCars.concat([addCar]),
      },
    });
  };

  const [addCar, { loading, error }] = useMutation(ADD_CAR, {
    variables: inputs,
    update: updateCache,
  });

  const handleSubmit = (e, addCar) => {
    e.preventDefault();
    addCar().then((data) => {
      console.log(data);
      clearForm();
      history.push('/');
    });
  };

  return (
    <AddCarStyled>
      <h2>Add Car</h2>
      <form className={classes.root}>
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField
              variant='outlined'
              label='Brand Name'
              name='brand'
              value={brand}
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              label='Model Name'
              name='model'
              value={model}
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              label='Image URL'
              name='imageUrl'
              value={imageUrl}
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              type='number'
              label='Price'
              name='price'
              value={price}
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              type='number'
              label='Number of Seats'
              name='seat'
              value={seat}
              onChange={handleChange}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField
              variant='outlined'
              type='number'
              label='Age'
              name='age'
              value={age}
              onChange={handleChange}
            />
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>Category</InputLabel>
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='category'
                onChange={handleChange}
                value={category}
              >
                <MenuItem value={'sedan'}>Sedan</MenuItem>
                <MenuItem value={'hatchback'}>Hatchback</MenuItem>
                <MenuItem value={'coupe'}>Coupe</MenuItem>
                <MenuItem value={'convertible'}>Convertible</MenuItem>
                <MenuItem value={'suv'}>Suv</MenuItem>
                <MenuItem value={'pickup'}>Pickup</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Availability
              </InputLabel>
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='isAvailable'
                onChange={handleChange}
                value={isAvailable}
                type='string'
              >
                <MenuItem value={'1'}>Yes</MenuItem>
                <MenuItem value={'0'}>No</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Check AC Availability
              </InputLabel>
              <Select
                variant='outlined'
                type='string'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='ac'
                onChange={handleChange}
                value={ac}
              >
                <MenuItem value={'1'}>Yes</MenuItem>
                <MenuItem value={'0'}>No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id=''
              label='Description'
              multiline
              rows={1}
              variant='outlined'
              name='description'
              value={description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </form>
      <button
        className='btn'
        type='submit'
        disabled={loading || validateForm()}
        onClick={(e) => handleSubmit(e, addCar)}
      >
        Add Car
      </button>
      {error && <Error error={error} />}
    </AddCarStyled>
  );
};

const AddCarStyled = styled.div`
  margin-top: 4em;
  margin-left: 9em;
  color: white;
  .MuiFormControl-root {
    width: 30em;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
  h2 {
    padding: 0 0 8px 8px;
  }

  .button {
    padding-top: 20px;
    padding-left: 10px;
    background-color: black !important;
  }
  .btn {
    height: 50px;
    width: 192px;
    color: white;
    background-color: black !important;
    border: hidden;
    cursor: pointer;
    margin: 1em 0 0 0.5em;
    font-size: 1.5em;
    &:hover {
      color: black !important;
      background-color: white !important;
      border: solid;
      border-width: thin;
    }
  }
`;

export default withAuth(
  (session) => session && session.getCurrentUser.role === 'admin',
)(withRouter(AddCar));
