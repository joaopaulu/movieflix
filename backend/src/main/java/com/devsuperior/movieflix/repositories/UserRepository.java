package com.devsuperior.movieflix.repositories;

import com.devsuperior.movieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String name);
}
