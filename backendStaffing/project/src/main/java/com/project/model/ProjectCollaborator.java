package com.project.model;

import javax.persistence.*;

public class ProjectCollaborator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROJ_COLL" , nullable = false)
    private Long id_PC;

    @ManyToOne
    @JoinColumn(name = "id_project", updatable = false, nullable = false)
    private Project project;

    @ManyToOne
    @JoinColumn(name = "id_collaborator", updatable = false, nullable = false)
    private Collaborator collaborator;

    public Long getId_PC() { return id_PC;  }

    public void setId_PC(Long id_PC) { this.id_PC = id_PC;  }

    public Project getProject() { return project;  }

    public void setProject(Project project) {  this.project = project;  }

    public Collaborator getCollaborator() { return collaborator;   }

    public void setCollaborator(Collaborator collaborator) {  this.collaborator = collaborator;   }
}
