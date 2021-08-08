import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import './styles/ShowList.css'

import { ShowCard } from './ShowCard';
import { useForm } from '../../hooks/useForm';
import { fetchShows } from '../../actions/search';

export const ShowList = ({ history }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { shows } = useSelector( state => state.shows );

  const { q = '' } = queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`);
    
    dispatch(fetchShows(searchText))
  }

  // const isValidForm = () => {
  // TODO: user npm i validator
  // };

  return (
    <div className="container">
                
      <div className="form-container">
          <form onSubmit={ handleSearch }>
              <input 
                  type="text"
                  placeholder="Search a Show"
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
          (shows && shows.length > 0) && 
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