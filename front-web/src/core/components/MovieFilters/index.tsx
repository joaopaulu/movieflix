import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import { Genres } from 'core/types/Genres';

type Props = {
  name?: string;
  genre?: Genres;
  handleChangeGenres: (genres: Genres) => void;
  clearFilters: () => void;
};

const MovieFilters = ({
  name,
  handleChangeGenres,
  clearFilters,
  genre,
}: Props) => {
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);
  const [genres, setGenres] = useState<Genres[]>([]);

  useEffect(() => {
    setIsLoadingGenres(true);
    makePrivateRequest({ url: '/genres' })
      .then(response => setGenres(response.data.content))
      .finally(() => setIsLoadingGenres(false));
  }, []);

  return (
    <div className="card-base movie-filters-container">
      <div className="input-search">
        <Select
          name="genres"
          key={`select-${genre?.id}`}
          value={genre}
          isLoading={isLoadingGenres}
          options={genres}
          getOptionLabel={(option: Genres) => option.name}
          getOptionValue={(option: Genres) => String(option.id)}
          className="filter-select-container"
          classNamePrefix="product-categories-select"
          placeholder="Generos"
          inputId="genres"
          onChange={value => handleChangeGenres(value as Genres)}
          isClearable
        />
        <button
          className="btn btn-outline-secondary border-radius-10"
          onClick={clearFilters}
        >
          LIMPAR FILTRO
        </button>
      </div>
    </div>
  );
};

export default MovieFilters;
