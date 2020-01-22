package com.project.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "PROJECTS")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_project")
    private Long id_project;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column (name = "start_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private String start_date;

    @Column(name = "end_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private String end_date;

    @Column(name = "status")
    private byte status;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "project")
    private List<ProjectCollaborator> projectCollaborators;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "project")
    private List<ProjectSkills> projectSkills;

    public Long getId_project() { return id_project;   }

    public void setId_project(Long id_project) {  this.id_project = id_project;   }

    public String getName() {  return name;  }

    public void setName(String name) { this.name = name;  }

    public String getDescription() { return description;  }

    public void setDescription(String description) { this.description = description;  }

    public String getStart_date() {  return start_date;  }

    public void setStart_date(String start_date) {  this.start_date = start_date;   }

    public String getEnd_date() {  return end_date;  }

    public void setEnd_date(String end_date) { this.end_date = end_date;  }

    public byte getStatus() {  return status;  }

    public void setStatus(byte status) {  this.status = status;   }

    public List<ProjectCollaborator> getProjectCollaborators() {  return projectCollaborators;  }

    public void setProjectCollaborators(List<ProjectCollaborator> projectCollaborators) {this.projectCollaborators = projectCollaborators;  }

    public List<ProjectSkills> getProjectSkills() { return projectSkills;  }

    public void setProjectSkills(List<ProjectSkills> projectSkills) { this.projectSkills = projectSkills;  }


}
