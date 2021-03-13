import { Reviews } from 'core/types/Review';
import { ReactComponent as Star } from 'core/assets/images/star.svg';
import './styles.scss';

type Props = {
  review: Reviews;
};

const MovieDetailsComment = ({ review }: Props) => {
  return (
    <>
      <h4 className="username-review">
        <Star />
        Name
      </h4>
      <div className="description-review">
        <span>teste</span>
      </div>
    </>
  );
};
export default MovieDetailsComment;
