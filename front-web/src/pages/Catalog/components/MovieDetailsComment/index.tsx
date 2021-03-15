import { ReactComponent as Star } from 'core/assets/images/star.svg';
import './styles.scss';

type Props = {
  autorReview?: string;
  commentReview?: string;
};

const MovieDetailsComment = ({ autorReview, commentReview }: Props) => {
  return (
    <>
      <div className="container-form-list-reaviews">
        <div className="description-review">
          <h4 className="username-review">
            <Star />
            {autorReview}
          </h4>
          <div className="description-review">
            <span>{commentReview}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetailsComment;
