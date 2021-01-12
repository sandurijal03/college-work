import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import useForm from '../../lib/useForm';
import Error from '../../lib/Error';
import './AddCarStyle.css';
import { ADD_CAR, GET_ALL_CARS } from '../../queries';
import { useMutation } from '@apollo/client';
import withAuth from '../withAuth';

const AddCar = ({ history }) => {
  const { inputs, handleChange, clearForm } = useForm({
    brand: '',
    description: '',
    category: '',
    model: '',
    isAvailable: '',
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
      clearForm();
      history.push('/');
    });
  };

  return (
    <div className='all'>
      <h2 className='heading'>Add Car</h2>
      <form onSubmit={(e) => handleSubmit(e, addCar)}>
        <div>
          <input
            type='text'
            name='brand'
            value={brand}
            onChange={handleChange}
            className='input'
            placeholder='brand name'
          />
        </div>
        <div>
          <input
            type='text'
            name='model'
            value={model}
            onChange={handleChange}
            placeholder='Model Name'
            className='input'
          />
        </div>
        <div>
          <input
            type='number'
            name='price'
            value={price}
            onChange={handleChange}
            placeholder='Price'
            className='input'
          />
        </div>

        <div>
          <input
            type='number'
            name='seat'
            value={seat}
            onChange={handleChange}
            placeholder='No of seats'
            className='input'
          />
        </div>

        <div>
          <select
            name='category'
            className='select'
            onChange={handleChange}
            value={category}
          >
            <option>please select car category</option>
            <option value='sedan'>sedan</option>
            <option value='suv'>suv</option>
            <option value='hatchbag'>hatchbag</option>
            <option value='coupe'>coupe</option>
            <option value='convertible'>convertible</option>
            <option value='convertible'>pickup</option>
          </select>
        </div>
        <div>
          <input
            type='number'
            name='age'
            value={age}
            onChange={handleChange}
            placeholder='Users age'
            className='input'
          />
        </div>
        <div>
          <select
            name='isAvailable'
            className='select'
            onChange={handleChange}
            value={isAvailable}
          >
            <option>please select cars availability</option>
            <option value={1}>yes</option>
            <option value={0}>no</option>
          </select>
        </div>
        <div>
          <select
            name='ac'
            className='select'
            onChange={handleChange}
            value={ac}
          >
            <option>please select ac availability</option>
            <option value={1}>yes</option>
            <option value={0}>no</option>
          </select>
        </div>
        <div>
          <textarea
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
            placeholder='Description'
            className='textarea'
          />
        </div>
        <div>
          <button
            type='submit'
            className='button-primary'
            disabled={loading || validateForm()}
          >
            Add Car
          </button>
        </div>
      </form>
      {error && <Error error={error} />}
    </div>
  );
};

export default withAuth(
  (session) => session && session.getCurrentUser.role === 'admin',
)(withRouter(AddCar));
