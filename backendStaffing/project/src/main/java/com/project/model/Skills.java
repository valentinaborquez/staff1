package com.project.model;

import javax.persistence.*;
import java.util.List;

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
    private List<CollaboratorSkills> collaboratorSkills;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "skill")
    private List<ProjectSkills> projectSkills;


    public Long getId_skill() { return id_skill;   }

    public void setId_skill(Long id_skill) {  this.id_skill = id_skill;   }

    public String getName() {   return name;  }

    public void setName(String name) {   this.name = name;  }

    public List<CollaboratorSkills> getCollaboratorSkills() {return collaboratorSkills;  }

    public void setCollaboratorSkills(List<CollaboratorSkills> collaboratorSkills) {  this.collaboratorSkills = collaboratorSkills; }

    public List<ProjectSkills> getProjectSkills() {   return projectSkills;     }

    public void setProjectSkills(List<ProjectSkills> projectSkills) {    this.projectSkills = projectSkills;    }
}
