import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesResponse } from 'core/types/Movies';
import { Genres } from 'core/types/Genres';
import { makePrivateRequest } from 'core/utils/request';
import MovieCard from './components/MovieCard';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import Pagination from 'core/components/Pagination';
import MovieFilters from 'core/components/MovieFilters';
import './styles.scss';

const Catalog = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genre, setGenre] = useState<Genres>();

  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 12,
      GenreId: genre?.id,
    };
    setIsLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage, genre]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleChangeGenre = (genre: Genres) => {
    setActivePage(0);
    setGenre(genre);
  };

  const clearFilters = () => {
    setActivePage(0);
    setGenre(undefined);
  };

  return (
    <div className="catalog-container">
      <div className="filter-container">
        <h1 className="catalog-title">Catálogo de produtos</h1>
        <MovieFilters
          genre={genre}
          handleChangeGenres={handleChangeGenre}
          clearFilters={clearFilters}
        />
      </div>
      <div className="catalog-movies">
        {isLoading ? (
          <MovieCardLoader />
        ) : (
          moviesResponse?.content.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))
        )}
      </div>
      {moviesResponse && (
        <Pagination
          totalPages={moviesResponse.totalPages}
          onChange={page => setActivePage(page)}
        />
      )}
    </div>
  );
};

export default Catalog;
