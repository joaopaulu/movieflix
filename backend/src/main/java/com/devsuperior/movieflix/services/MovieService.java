package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.services.exceptions.DatabaseException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import com.devsuperior.movieflix.services.iface.IGenreService;
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
public class GenreService implements IGenreService {

    @Autowired
    private GenreRepository repository;

    @Override
    @Transactional(readOnly = true)
    public Page<GenreDTO> findAllPaged(PageRequest pageRequest){
        Page<Genre> list = repository.findAll(pageRequest);
        return  list.map(GenreDTO::new);
    }

    @Override
    @Transactional(readOnly = true)
    public GenreDTO findById(Long id){
        Optional<Genre> obj = repository.findById(id);
        Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new GenreDTO(entity);
    }

    @Override
    @Transactional
    public GenreDTO insert(GenreDTO dto){
        Genre entity = new Genre();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new GenreDTO(entity);
    }

    @Override
    @Transactional
    public GenreDTO update(Long id, GenreDTO dto){
        try {
            Genre entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new GenreDTO(entity);
        }catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    @Override
    public void delete(Long id){
        try {
            repository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void copyDtoEntity(GenreDTO dto, Genre entity) {
        entity.setName(dto.getName());
    }
}
