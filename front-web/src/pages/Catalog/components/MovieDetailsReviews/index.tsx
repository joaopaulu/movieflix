import { makePrivateRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.scss';

type ParamsType = {
  id: string;
};

type FormState = {
  text?: string;
  movieId: number;
};

const MovieDetailsReviews = ({ id }: ParamsType) => {
  const { register, errors, handleSubmit } = useForm<FormState>();
  const history = useHistory();

  const onSubmit = (data: FormState) => {
    data.movieId = parseInt(id);
    makePrivateRequest({ url: `/reviews`, method: 'POST', data })
      .then(response => {
        toast.info('Obrigado pela sua Avaliação!');
        history.go(0);
      })
      .catch(() => {
        toast.error('Houve um erro na validação de seu comentário.');
      });
  };
  return (
    <>
      <div className="container-form-create-reaviews">
        <form onSubmit={handleSubmit(onSubmit)} className="comment-container">
          {errors.text && (
            <div className="comment-alert">
              A Avaliação deve ser preenchida!
            </div>
          )}
          <textarea
            name="text"
            placeholder="Deixe sua avaliação aqui"
            className="input-review"
            cols={2}
            rows={10}
            ref={register({ required: 'A Avaliação deve ser preenchida' })}
          ></textarea>
          <button className="btn-save-review">SALVAR AVALIAÇÃO</button>
        </form>
      </div>
    </>
  );
};

export default MovieDetailsReviews;
