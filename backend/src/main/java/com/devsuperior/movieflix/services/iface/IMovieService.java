package com.devsuperior.movieflix.services.iface;

import com.devsuperior.movieflix.dto.MovieDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IMovieService {

    Page<MovieDTO> findAllPaged(PageRequest pageRequest);

    MovieDTO findById(Long id);

    MovieDTO insert(MovieDTO dto);

    MovieDTO update(Long id, MovieDTO dto);

    void delete(Long id);
}
