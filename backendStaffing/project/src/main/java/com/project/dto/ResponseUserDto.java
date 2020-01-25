package com.project.dto;

import com.project.model.Administrator;
import com.project.model.Collaborator;

public class ResponseUserDto {
    private String emailDto;
    private byte rol;

    public String getEmailDto() {
        return emailDto;
    }

    public void setEmailDto(String emailDto) {
        this.emailDto = emailDto;
    }

    public byte getRol() {
        return rol;
    }

    public void setRol(byte rol) {
        this.rol = rol;
    }
}
