import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { Movie } from 'core/types/Movie';
import MovieDescriptionLoader from '../Loaders/MovieDescriptionLoader';
import MovieInfoLoader from '../Loaders/MovieInfoLoader';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import { EditorState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { Editor } from 'react-draft-wysiwyg';

type ParamsType = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const contentState = stateFromHTML(movie?.synopsis || '');
  const descriptionAsEditorState = EditorState.createWithContent(contentState);

  useEffect(() => {
    setIsLoading(true);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <Link to="/movies" className="movie-details-goback">
        <ArrowIcon className="icon-goback" />
        <h1 className="text-goback">voltar</h1>
      </Link>
      <div className="movie-details-info">
        {isLoading ? (
          <MovieInfoLoader />
        ) : (
          <>
            <div className="movie-details-card">
              <img
                className="movie-details-image"
                src={movie?.imgUrl}
                alt={movie?.title}
              />
            </div>
          </>
        )}
        <div className="movie-info-fields">
          {isLoading ? (
            <MovieDescriptionLoader />
          ) : (
            <>
              <h1 className="movie-details-name">{movie?.title}</h1>
              <h4 className="movie-details-year">{movie?.year}</h4>
              <h6 className="movie-details-subtitle">{movie?.subTitle}</h6>
              <span className="movie-details-subtitle">{movie?.synopsis}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
