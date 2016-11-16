package com.soprasteria.repository;

import org.springframework.data.repository.CrudRepository;

import com.soprasteria.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
