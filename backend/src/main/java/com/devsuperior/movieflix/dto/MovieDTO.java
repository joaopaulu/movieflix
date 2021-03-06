package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


public class MovieDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String title;
    private String subTitle;
    private Integer year;
    private String imgUrl;
    private String synopsis;

    Set<GenreDTO> genres = new HashSet<>();

    public MovieDTO() {
    }

    public MovieDTO(Long id, String title, String subTitle, Integer year, String imgUrl, String synopsis, Set<GenreDTO> genres) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.year = year;
        this.imgUrl = imgUrl;
        this.synopsis = synopsis;
        this.genres = genres;
    }

    public MovieDTO(Movie movie) {
        id = movie.getId();
        title = movie.getTitle();
        subTitle = movie.getSubTitle();
        year = movie.getYear();
        imgUrl = movie.getImgUrl();
        synopsis = movie.getSynopsis();

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public Set<GenreDTO> getGenres() {
        return genres;
    }

    public void setGenres(Set<GenreDTO> genres) {
        this.genres = genres;
    }
}