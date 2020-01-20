package com.project.model;


import javax.persistence.*;

@Entity
@Table(name= "Collaborator")
public class Collaborator {
    private Long id_collaborator;
    private String name;
    private String lastName;
    private String dni;
    private String position;




}
