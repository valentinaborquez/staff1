package com.project.dto;

import com.project.model.Administrator;
import com.project.model.Collaborator;

public class ResponseUserDto {
    private String emailDto;
    private String passwordDto;
    private Administrator administratorDto;
    private Collaborator collaboratorDto;

    public String getEmailDto() {
        return emailDto;
    }

    public void setEmailDto(String emailDto) {
        this.emailDto = emailDto;
    }

    public String getPasswordDto() {
        return passwordDto;
    }

    public void setPasswordDto(String passwordDto) {
        this.passwordDto = passwordDto;
    }

    public Administrator getAdministratorDto() {
        return administratorDto;
    }

    public void setAdministratorDto(Administrator administratorDto) {
        this.administratorDto = administratorDto;
    }

    public Collaborator getCollaboratorDto() {
        return collaboratorDto;
    }

    public void setCollaboratorDto(Collaborator collaboratorDto) {
        this.collaboratorDto = collaboratorDto;
    }
}
