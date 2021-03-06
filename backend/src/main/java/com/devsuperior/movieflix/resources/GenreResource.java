package com.devsuperior.movieflix.resources;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {

    @Autowired
    private GenreService service;

    @GetMapping
    public ResponseEntity<Page<GenreDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "orderBy", defaultValue = "name") String orderBy){

        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);

        Page<GenreDTO> list = service.findAllPaged(pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<GenreDTO> findById(@PathVariable Long id){
        GenreDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<GenreDTO> insert(@RequestBody GenreDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<GenreDTO> update(@PathVariable Long id, @RequestBody GenreDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<GenreDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
