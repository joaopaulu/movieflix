package com.devsuperior.movieflix.services.iface;

import com.devsuperior.movieflix.dto.ReviewDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IReviewService {

    Page<ReviewDTO> findAllPaged(PageRequest pageRequest);

    ReviewDTO findById(Long id);

    ReviewDTO insert(ReviewDTO dto);

    ReviewDTO update(Long id, ReviewDTO dto);

    void delete(Long id);
}
