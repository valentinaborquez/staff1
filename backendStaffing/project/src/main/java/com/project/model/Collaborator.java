package com.project.model;


import javax.persistence.*;

@Entity
@Table(name= "Collaborator")
public class Collaborator {
    @Id
    @Column(name = "id_colaborator")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_collaborator;

}
