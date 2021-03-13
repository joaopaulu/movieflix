import { useEffect, useState, useCallback } from 'react';

import { Reviews, ReviewsResponse } from 'core/types/Review';
import { makePrivateRequest } from 'core/utils/request';
import { useHistory } from 'react-router';
import './styles.scss';
import MovieDetailsComment from '../MovieDetailsComment';

const MovieDetailsReviews = () => {
  const [reviewsResponse, setReviewsResponse] = useState<ReviewsResponse>();
  //const history = useHistory();

  const getReviews = useCallback(() => {
    const params = {
      linesPerPage: 10,
      direction: 'ASC',
    };
    makePrivateRequest({ url: '/reviews', params }).then(response =>
      setReviewsResponse(response.data),
    );
  }, []);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

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
        <div className="description-review">
          {reviewsResponse?.content.map(review => (
            <MovieDetailsComment review={review} key={review.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetailsReviews;
