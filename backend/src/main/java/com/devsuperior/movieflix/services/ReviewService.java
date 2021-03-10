package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.DatabaseException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private AuthService authService;

    @Transactional(readOnly = true)
    public Page<ReviewDTO> findAllPaged(PageRequest pageRequest){
        Page<Review> list = repository.findAll(pageRequest);
        return  list.map(ReviewDTO::new);
    }

    @Transactional(readOnly = true)
    public ReviewDTO findById(Long id){
        Optional<Review> obj = repository.findById(id);
        Review entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new ReviewDTO(entity);
    }

    @Transactional
    public ReviewDTO insert(ReviewDTO dto){
        Review entity = new Review();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new ReviewDTO(entity);
    }

    @Transactional
    public ReviewDTO update(Long id, ReviewDTO dto){
        try {
            Review entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new ReviewDTO(entity);
        }catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    public void delete(Long id){
        try {
            repository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void copyDtoEntity(ReviewDTO dto, Review entity) {
        Movie movie = movieRepository.getOne(dto.getMovieId());
        User user = authService.authenticated();

        authService.validateSelfOrAdmin(user.getId());
        entity.setText(dto.getText());
        entity.setMovie(movie);
        entity.setUser(user);
    }
}
