import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { getShowById } from '../../actions/show';
import DOMPurify from 'dompurify';
import { Spinner } from 'react-bootstrap';
import { BsStarHalf, BsFilm, BsFillChatQuoteFill, BsFillInfoCircleFill } from "react-icons/bs";

export const ShowDetailScreen = ({ history }) => {
  const { showId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowById(showId))
  }, [ showId ]);

  const { show } = useSelector( state => state.showDetail );

  const handleReturn = () => {
    if( history.length <=2 ) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  return (
    (show) ?
    <div className="row mt-5">
    <div className="col-4">
        <img 
            src={ show.image.original || show.image.original }
            alt={ show.name }
            className="img-thumbnail"
        />
    </div>

    <div className="col-8">
        <h3> { show.name } </h3>
        <h5> Description </h5>
        <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(show.summary)}}></div>

        <ul className="list-group list-group-flush">
            <li className="list-group-item"><BsFillInfoCircleFill /> <b> Type: </b> { show.type || 'No type' } </li>
            <li className="list-group-item"><BsFilm /> <b> Genres </b> { show.genres.join(' - ') || 'No genres' } </li>
            <li className="list-group-item"><BsStarHalf /> <b> Rating </b> {(show.rating.average) ?  show.rating.average : 'No rating'} </li>
            <li className="list-group-item"><BsFillChatQuoteFill /> <b> Language </b> { show.language || 'No language' } </li>
        </ul>

        <button 
            className="btn btn-outline-info"
            onClick={ handleReturn }
        >
            Return
        </button>

    </div>

</div>
:
// TODO: hacer componente generico
// TODO: manejar loading
<Spinner animation="border" />
  )
}