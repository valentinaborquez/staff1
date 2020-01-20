package com.project.model;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

public class Collaborator_Skills {
    @OneToOne
    @JoinColumn(name = "id_skill", updatable = false, nullable = false)
    private Skills skills;

    @OneToOne
    @JoinColumn(name = "id_collaborator", updatable = false, nullable = false)
    private Collaborator collaborator;


    public Skills getSkills() {  return skills;  }

    public void setSkills(Skills skills) {  this.skills = skills;  }

    public Collaborator getCollaborator() { return collaborator;  }

    public void setCollaborator(Collaborator collaborator) { this.collaborator = collaborator;  }
}
