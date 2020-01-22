package com.project.repository;


import com.project.model.Administrator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministratorRepository  extends JpaRepository<Administrator,Long> {
}