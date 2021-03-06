package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Role;
import lombok.Data;

import java.io.Serializable;

@Data
public class RoleDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String authority;

    public RoleDTO(){
    }

    public RoleDTO(Long id, String authority) {
        this.id = id;
        this.authority = authority;
    }

    public RoleDTO(Role role) {
        id = role.getId();
        authority = role.getAuthority();
    }
}
