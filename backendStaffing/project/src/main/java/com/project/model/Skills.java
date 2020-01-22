package com.project.model;

import javax.persistence.*;

@Entity
@Table (name = "SKILLS")
public class Skills {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_skill")
    private Long id_skill;
    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "skill")
    private List<Collaborator_Skills> collaboratorSkillsList;



}
