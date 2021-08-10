import { Spinner } from 'react-bootstrap';

import './styles/Loading.css'

export const Loading = () => {
  return(
    <div className='d-flex justify-content-center'>
      <Spinner animation='border' variant='dark' />
    </div>
  );
}