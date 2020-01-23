package com.project.dto;

import com.project.model.CollaboratorSkills;
import com.project.model.ProjectCollaborator;
import com.project.model.User;

import java.util.List;

public class ResponseCollaboratorDto {
    private Long id_collaboratorDto;
    private String nameDto;
    private String lastNameDto;
    private String dniDto;
    private String positionDto;
    private List<ProjectCollaborator> projectCollaboratorsDto;
    private List<CollaboratorSkills> collaboratorSkillsDto;
    private User userDto;
    private byte asignadoDto;

    public Long getId_collaboratorDto() {
        return id_collaboratorDto;
    }

    public void setId_collaboratorDto(Long id_collaboratorDto) {
        this.id_collaboratorDto = id_collaboratorDto;
    }

    public String getNameDto() {
        return nameDto;
    }

    public void setNameDto(String nameDto) {
        this.nameDto = nameDto;
    }

    public String getLastNameDto() {
        return lastNameDto;
    }

    public void setLastNameDto(String lastNameDto) {
        this.lastNameDto = lastNameDto;
    }

    public String getDniDto() {
        return dniDto;
    }

    public void setDniDto(String dniDto) {
        this.dniDto = dniDto;
    }

    public String getPositionDto() {
        return positionDto;
    }

    public void setPositionDto(String positionDto) {
        this.positionDto = positionDto;
    }

    public List<ProjectCollaborator> getProjectCollaboratorsDto() {
        return projectCollaboratorsDto;
    }

    public void setProjectCollaboratorsDto(List<ProjectCollaborator> projectCollaboratorsDto) {
        this.projectCollaboratorsDto = projectCollaboratorsDto;
    }

    public List<CollaboratorSkills> getCollaboratorSkillsDto() {
        return collaboratorSkillsDto;
    }

    public void setCollaboratorSkillsDto(List<CollaboratorSkills> collaboratorSkillsDto) {
        this.collaboratorSkillsDto = collaboratorSkillsDto;
    }

    public User getUserDto() {
        return userDto;
    }

    public void setUserDto(User userDto) {
        this.userDto = userDto;
    }

    public byte getAsignadoDto() {
        return asignadoDto;
    }

    public void setAsignadoDto(byte asignadoDto) {
        this.asignadoDto = asignadoDto;
    }
}
