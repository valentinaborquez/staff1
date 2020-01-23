package com.project.dto;

import com.project.model.Project;
import com.project.model.Skills;

public class ResponseProjectSkillsDto {
    private Long id_PSDto;
    private Skills skillsDto;
    private Project projectDto;

    public Long getId_PSDto() {
        return id_PSDto;
    }

    public void setId_PSDto(Long id_PSDto) {
        this.id_PSDto = id_PSDto;
    }

    public Skills getSkillsDto() {
        return skillsDto;
    }

    public void setSkillsDto(Skills skillsDto) {
        this.skillsDto = skillsDto;
    }

    public Project getProjectDto() {
        return projectDto;
    }

    public void setProjectDto(Project projectDto) {
        this.projectDto = projectDto;
    }
}
