package com.project.dto;

import com.project.model.Collaborator;
import com.project.model.Project;

public class ReqProjectCollaboratorDto {
    private Long id_PCDto;
    private Project projectDto;
    private Collaborator collaboratorDto;

    public Long getId_PCDto() {
        return id_PCDto;
    }

    public void setId_PCDto(Long id_PCDto) {
        this.id_PCDto = id_PCDto;
    }

    public Project getProjectDto() {
        return projectDto;
    }

    public void setProjectDto(Project projectDto) {
        this.projectDto = projectDto;
    }

    public Collaborator getCollaboratorDto() {
        return collaboratorDto;
    }

    public void setCollaboratorDto(Collaborator collaboratorDto) {
        this.collaboratorDto = collaboratorDto;
    }
}
