package com.project.model;

import javax.persistence.*;

@Entity
@Table(name = "project_skills")
public class ProjectSkills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROJ_SKILL" , nullable = false)
    private Long id_PS;

    @ManyToOne
    @JoinColumn(name = "id_skill", updatable = false, nullable = false)
    private Skills skills;

    @ManyToOne
    @JoinColumn(name = "id_project", updatable = false, nullable = false)
    private Project project;
}
