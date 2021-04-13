import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARGUMENT_CARS } from '../../queries';
import { withRouter } from 'react-router-dom';

const GetArgumentsCar = ({ match, history }) => {
  const { category } = match.params;
  const { loading, data, error } = useQuery(GET_ARGUMENT_CARS, {
    variables: { category },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h4>Error</h4>;

  return data.getArgumentCars.map(
    ({ objectId, _id, model, brand, category }) => (
      <section id='store' className='store py-5' style={{ background: 'grey' }}>
        <div className='container'>
          <div className='row store-items'>
            <div className='col-10 col-sm-6 col-lg-6 mx-auto my-3 store-item cars'>
              <div className='card single-item'>
                <div
                  className='img-container'
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => history.push(`/cars/${_id}`)}
                >
                  <img
                    src={`../../assets/${objectId}.jpg`}
                    alt='cars'
                    className='img-fluid w-50'
                  />
                  <h1>{model}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  );
};

export default withRouter(GetArgumentsCar);
