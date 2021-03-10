package com.devsuperior.movieflix.resources;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.services.GenreService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/genres")
@Api(tags = "Gêneros")
public class GenreResource {

    @Autowired
    private GenreService service;

    @GetMapping
    @ApiOperation("Busca todos os gêneros")
    public ResponseEntity<List<GenreDTO>> findAll(){
        List<GenreDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Busca gênero por ID")
    public ResponseEntity<GenreDTO> findById(@PathVariable Long id){
        GenreDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Cadastrar um gênero")
    public ResponseEntity<GenreDTO> insert(@RequestBody GenreDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualizar um gênero")
    public ResponseEntity<GenreDTO> update(@PathVariable Long id, @RequestBody GenreDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deletar um gênero")
    public ResponseEntity<GenreDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
