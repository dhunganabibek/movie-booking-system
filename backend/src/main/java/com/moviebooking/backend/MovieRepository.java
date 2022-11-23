package com.moviebooking.backend;

import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movies, Integer> {
}
