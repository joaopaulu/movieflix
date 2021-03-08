package com.devsuperior.movieflix.resources;

import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.dto.UserInsertDTO;
import com.devsuperior.movieflix.dto.UserUpdateDTO;
import com.devsuperior.movieflix.services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/users")
@Api(tags = "Usuários")
public class UserResource {

    @Autowired
    private UserService service;

    @GetMapping
    @ApiOperation("Busca todos os usuários")
    public ResponseEntity<Page<UserDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "orderBy", defaultValue = "name") String orderBy){

        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);

        Page<UserDTO> list = service.findAllPaged(pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Consulta usuário por ID")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id){
        UserDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Cadastra um usuário")
    public ResponseEntity<UserDTO> insert(@Valid @RequestBody UserInsertDTO dto){
        UserDTO newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualiza um usuário")
    public ResponseEntity<UserDTO> update(@PathVariable Long id, @Valid @RequestBody UserUpdateDTO dto){
        UserDTO newDto = service.update(id, dto);
        return ResponseEntity.ok().body(newDto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deleta um usuário")
    public ResponseEntity<UserDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
