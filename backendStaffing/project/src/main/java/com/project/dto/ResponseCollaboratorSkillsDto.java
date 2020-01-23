package com.project.dto;

import com.project.model.Collaborator;
import com.project.model.Skills;

public class ResponseCollaboratorSkillsDto {
    private Long id_CSDto;
    private Skills skillsDto;
    private Collaborator collaboratorDto;

    public Long getId_CSDto() {
        return id_CSDto;
    }

    public void setId_CSDto(Long id_CSDto) {
        this.id_CSDto = id_CSDto;
    }

    public Skills getSkillsDto() {
        return skillsDto;
    }

    public void setSkillsDto(Skills skillsDto) {
        this.skillsDto = skillsDto;
    }

    public Collaborator getCollaboratorDto() {
        return collaboratorDto;
    }

    public void setCollaboratorDto(Collaborator collaboratorDto) {
        this.collaboratorDto = collaboratorDto;
    }
}
