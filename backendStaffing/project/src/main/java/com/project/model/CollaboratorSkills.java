package com.project.model;

import javax.persistence.*;

public class CollaboratorSkills {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_COLL_SKILL" , nullable = false)
    private Long id_CS;

    @ManyToOne
    @JoinColumn(name = "id_skill", updatable = false, nullable = false)
    private Skills skills;

    @ManyToOne
    @JoinColumn(name = "id_collaborator", updatable = false, nullable = false)
    private Collaborator collaborator;


    public Skills getSkills() {  return skills;  }

    public void setSkills(Skills skills) {  this.skills = skills;  }

    public Collaborator getCollaborator() { return collaborator;  }

    public void setCollaborator(Collaborator collaborator) { this.collaborator = collaborator;  }
}
