package com.project.repository;

import com.project.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


    @Repository
    public interface ProjectRepository extends JpaRepository<Project, Long> {
        @Query (("SELECT * FROM STUDENTS s WHERE s.name = :name"))
        List<Project> findByName(@Param("name")  String name);
    }

