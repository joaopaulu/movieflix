import { useEffect, useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { Genre } from 'core/types/Movies';
import Select from 'react-select';
import './styles.scss';

type Props = {
  name?: string;
  genre?: Genre;
  handleChangeGenres: (genre: Genre) => void;
};

const MovieFilters = ({ handleChangeGenres, genre }: Props) => {
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    setIsLoadingGenres(true);
    makePrivateRequest({ url: '/genres' })
      .then(response => setGenres(response.data))
      .finally(() => setIsLoadingGenres(false));
  }, []);

  return (
    <div className="card-base movie-filters-container">
      <Select
        name="genres"
        key={`select-${genre?.id}`}
        value={genre}
        isLoading={isLoadingGenres}
        options={genres}
        getOptionLabel={(option: Genre) => option.name}
        getOptionValue={(option: Genre) => String(option.id)}
        className="filter-select-container"
        classNamePrefix="movie-genres-select"
        placeholder="Generos"
        inputId="genres"
        onChange={value => handleChangeGenres(value as Genre)}
        isClearable
      />
    </div>
  );
};

export default MovieFilters;
