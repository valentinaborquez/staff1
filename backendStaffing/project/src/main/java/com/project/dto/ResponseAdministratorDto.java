package com.project.dto;

import com.project.model.User;

public class ResponseAdministratorDto {
    private Long id_administratorDto;
    private String nameDto;
    private String lastnameDto;
    private User userDto;

    public Long getId_administratorDto() {
        return id_administratorDto;
    }

    public void setId_administratorDto(Long id_administratorDto) {
        this.id_administratorDto = id_administratorDto;
    }

    public String getNameDto() {
        return nameDto;
    }

    public void setNameDto(String nameDto) {
        this.nameDto = nameDto;
    }

    public String getLastnameDto() {
        return lastnameDto;
    }

    public void setLastnameDto(String lastnameDto) {
        this.lastnameDto = lastnameDto;
    }

    public User getUserDto() {
        return userDto;
    }

    public void setUserDto(User userDto) {
        this.userDto = userDto;
    }
}
