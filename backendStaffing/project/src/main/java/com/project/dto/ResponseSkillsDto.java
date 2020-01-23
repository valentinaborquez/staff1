package com.project.dto;

import com.project.model.CollaboratorSkills;
import com.project.model.ProjectSkills;

import java.util.List;

public class ResponseSkillsDto {
    private Long id_skillDto;
    private String nameDto;
    private List<CollaboratorSkills> collaboratorSkillsDto;
    private List<ProjectSkills> projectSkillsDto;

    public Long getId_skillDto() {
        return id_skillDto;
    }

    public void setId_skillDto(Long id_skillDto) {
        this.id_skillDto = id_skillDto;
    }

    public String getNameDto() {
        return nameDto;
    }

    public void setNameDto(String nameDto) {
        this.nameDto = nameDto;
    }

    public List<CollaboratorSkills> getCollaboratorSkillsDto() {
        return collaboratorSkillsDto;
    }

    public void setCollaboratorSkillsDto(List<CollaboratorSkills> collaboratorSkillsDto) {
        this.collaboratorSkillsDto = collaboratorSkillsDto;
    }

    public List<ProjectSkills> getProjectSkillsDto() {
        return projectSkillsDto;
    }

    public void setProjectSkillsDto(List<ProjectSkills> projectSkillsDto) {
        this.projectSkillsDto = projectSkillsDto;
    }
}
