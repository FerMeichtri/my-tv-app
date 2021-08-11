import './styles/NotFound.css';
import notFoundImg from '../../assets/images/404_not_found.png';

export const NotFound = () => {
  return (
    <div className='not-found-container'>
      <img src={notFoundImg} alt='Not Shows found' />
      <h2>Page not found</h2>
    </div>
  )
}