import './styles.scss';
import { ReactComponent as Star } from 'core/assets/images/star.svg';

const MovieDetailsReviews = () => {
  return (
    <>
      <div className="container-form-create-reaviews">
        <form action="">
          <textarea
            name="text-review"
            placeholder="Deixe sua avaliação aqui"
            className="input-review"
          ></textarea>
          <button className="btn-save-review">SALVAR AVALIAÇÃO</button>
        </form>
      </div>
      <div className="container-form-list-reaviews">
        <h4 className="username-review">
          <Star />
          Maria Silva
        </h4>
        <div className="description-review">
          <span>
            Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsReviews;
