package com.devsuperior.movieflix.services.iface;

import com.devsuperior.movieflix.dto.GenreDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IGenreService {

    Page<GenreDTO> findAllPaged(PageRequest pageRequest);

    GenreDTO findById(Long id);

    GenreDTO insert(GenreDTO dto);

    GenreDTO update(Long id, GenreDTO dto);

    void delete(Long id);
}
