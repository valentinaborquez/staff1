package com.project.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name= "Collaborator")
public class Collaborator {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_collaborator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "dni")
    private String dni;

    @Column(name = "position")
    private String position;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "collaborator")
    private List<ProjectCollaborator> projectCollaborators;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "collaborator")
    private List<CollaboratorSkills> collaboratorSkills;

    @OneToOne
    @JoinColumn(name = "id_user", updatable = false, nullable = false)
    private User user;

    @Column(name = "asignado")
    private byte asignado;

    public Long getId() { return id;   }

    public void setId(Long id) { this.id = id;  }

    public String getName() { return name;  }

    public void setName(String name) {   this.name = name;    }

    public String getLastName() {  return lastName;  }

    public void setLastName(String lastName) {  this.lastName = lastName;  }

    public String getDni() {  return dni;  }

    public void setDni(String dni) { this.dni = dni;  }

    public String getPosition() {  return position;  }

    public void setPosition(String position) { this.position = position;  }

    public List<ProjectCollaborator> getProjectCollaborators() {  return projectCollaborators;  }

    public void setProjectCollaborators(List<ProjectCollaborator> projectCollaborators) {  this.projectCollaborators = projectCollaborators;  }

    public List<CollaboratorSkills> getCollaboratorSkills() {return collaboratorSkills;  }

    public void setCollaboratorSkills(List<CollaboratorSkills> collaboratorSkills) { this.collaboratorSkills = collaboratorSkills;  }

    public User getUser() { return user;  }

    public void setUser(User user) {  this.user = user;   }
}
