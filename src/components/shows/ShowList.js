import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles/ShowList.css';

import { ShowCard } from './ShowCard';
import { useForm } from '../../hooks/useForm';
import { fetchShows } from '../../actions/show';
import { Loading } from '../common/Loading';

export const ShowList = ({ history }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { shows, isLoading } = useSelector( state => state.shows );

  const { q = '' } = queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  // load shows the first time 
  // if a query param is received
  // in the url
  useEffect(() => {
    dispatch(fetchShows(searchText))
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`);
    
    dispatch(fetchShows(searchText))
  }

  return (
    <div className="container"> 
      <div className="border rounded form-container">
          <h2>Find your favorite show</h2>
          <form className='d-flex justify-content-center' onSubmit={ handleSearch }>
              <input 
                  type="text"
                  placeholder="Search a show"
                  className="w-75 p-3 form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ handleInputChange }
              />
          </form>
      </div>

      <div className="shows-container">
        {
          (isLoading) && <Loading />
        }
        {
          (!isLoading && q !== '' && shows.length === 0) &&
          <div className='no-data-card'>
              <img src="assets/images/tvShow.png" alt='Not Shows found' />
              <h2>Not found results for your search</h2>
          </div>
        }
        {
          (!isLoading && shows && shows.length > 0) &&
          shows.map(showItem => {
            const show = showItem.show;
            return <ShowCard 
              key = { show.id }
              { ...show }
            />
          })
        }
      </div>
    </div>
  )
}