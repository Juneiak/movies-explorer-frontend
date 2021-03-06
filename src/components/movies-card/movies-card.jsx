import React from 'react';
import './movies-card.css';
import PropTypes from 'prop-types';
import { CardActionContext, CurrentUserContext, PopupsContext } from '../../contexts/index';

const MoviesCard = ({
  deleteCardHandler=function(){},
  isSavedMovieCard=false,
  cardData: {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  }}) => {
  const handledDurationHour = Math.floor(duration / 60);
  const handledDurationMin = duration % 60;
  
  const [isLiked, setIsLiked] = React.useState(false);

  const { addMovieHandler, deleteMovieHandler, likedMoviesIdList } = React.useContext(CardActionContext);
  const { currentUser } = React.useContext(CurrentUserContext)
  const { setIsNotLoggedInPopupOpen } = React.useContext(PopupsContext);

  const handleRemove = () => {
    deleteMovieHandler(movieId)
      .then((deletedCard) => deleteCardHandler(deletedCard.movieId))
      .catch((err) => console.error(`delete card action error in movies card - ${err}`))
  }
  const handleAdd = () => addMovieHandler({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  });

  const handleLikeClick = () => {
    if (!currentUser.email) {
      setIsNotLoggedInPopupOpen(true)
      return
    }
    if (isLiked) {
      deleteMovieHandler(movieId)
        .then(() => setIsLiked(false))
        .catch((err) => console.error(`unlike action error in movies card - ${err}`))
      ;
    } else {
      handleAdd()
        .then(() => setIsLiked(true))
        .catch((err) => console.error(`like action error in movies card - ${err}`))
    }
  }

  React.useEffect(() => {
    if (likedMoviesIdList.includes(movieId)) setIsLiked(true);
  }, [likedMoviesIdList])

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <p className='movies-card__title'>{nameRU}</p>
        <span className='movies-card__duration'>{`${handledDurationHour}?? ${handledDurationMin}??`}</span>
        {isSavedMovieCard
          ? <button type='button' onClick={handleRemove} className='movies-card__delete-button' />
          : <button
              type='button'
              onClick={handleLikeClick}
              className={`movies-card__like-button ${isLiked && 'movies-card__like-button_active'}`}
            />}
      </div>
      <img className='movies-card__card-image' alt='???????? ????????????????' src={image} />
    </li>
  );
};

export default MoviesCard;
