package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Genre;
import lombok.Data;

import java.io.Serializable;

@Data
public class GenreDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    public GenreDTO() {
    }

    public GenreDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public GenreDTO(Genre entity){
        this.id = entity.getId();
        this.name = entity.getName();
    }
}