package com.project.controller;


import com.project.imp.AdministratorImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/administrators")
public class AdministratorController {


    @Autowired
    private AdministratorImp administratorImp;


}
