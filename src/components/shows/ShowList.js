import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles/ShowList.css';
import { Spinner } from 'react-bootstrap';

import { ShowCard } from './ShowCard';
import { useForm } from '../../hooks/useForm';
import { fetchShows } from '../../actions/show';

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
      <div className="form-container">
          <form onSubmit={ handleSearch }>
              <input 
                  type="text"
                  placeholder="Search a show"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ handleInputChange }
              />
              {/* <div>
                <button
                    type="submit"
                    className="btn m-1 btn-block btn-dark"
                >
                    Buscar
                </button>
                <button
                    type="submit"
                    className="btn m-1 btn-block btn-dark"
                >
                    Limpiar
                </button>
              </div> */}
          </form>
      </div>

      <div className="shows-container">
      {
        (isLoading) && <Spinner animation="border" />
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