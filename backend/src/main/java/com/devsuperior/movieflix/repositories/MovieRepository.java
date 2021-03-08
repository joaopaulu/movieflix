package com.devsuperior.movieflix.repositories;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    @Query("SELECT obj FROM Movie obj WHERE:genre IS NULL OR :genre = obj.genre")
    Page<Movie> find(Genre genre, Pageable pageable);

    @Query("SELECT obj FROM Movie obj WHERE :genre IS NULL OR obj.genre = :genre ORDER BY obj.title ASC")
    Page<Movie> searchAll(Genre genre, Pageable pageable);

}
