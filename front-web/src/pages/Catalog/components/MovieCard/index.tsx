import { Movies } from 'core/types/Movies';
import './styles.scss';

type Props = {
  movie: Movies;
};

const MovieCard = ({ movie }: Props) => (
  <div className="movie-card">
    <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
    <div className="movie-info">
      <h4 className="catalog-title">{movie.title}</h4>
      <h6 className="catalog-year">{movie.year}</h6>
      <span className="catalog-subtitle">{movie.subTitle}</span>
    </div>
  </div>
);

export default MovieCard;
