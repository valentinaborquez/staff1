package com.project.dto;

import com.project.model.ProjectCollaborator;
import com.project.model.ProjectSkills;

import java.util.List;

public class ReqProjectDto {

    private Long id_projectDto;
    private String nameDto;
    private String descriptionDto;
    private String start_dateDto;
    private String end_dateDto;
    private List<ProjectCollaborator> projectCollaboratorsDto;
    private List<ProjectSkills> projectSkillsDto;

    public Long getId_projectDto() {
        return id_projectDto;
    }

    public void setId_projectDto(Long id_projectDto) {
        this.id_projectDto = id_projectDto;
    }

    public String getNameDto() {
        return nameDto;
    }

    public void setNameDto(String nameDto) {
        this.nameDto = nameDto;
    }

    public String getDescriptionDto() {
        return descriptionDto;
    }

    public void setDescriptionDto(String descriptionDto) {
        this.descriptionDto = descriptionDto;
    }

    public String getStart_dateDto() {
        return start_dateDto;
    }

    public void setStart_dateDto(String start_dateDto) {
        this.start_dateDto = start_dateDto;
    }

    public String getEnd_dateDto() {
        return end_dateDto;
    }

    public void setEnd_dateDto(String end_dateDto) {
        this.end_dateDto = end_dateDto;
    }

    public List<ProjectCollaborator> getProjectCollaboratorsDto() {
        return projectCollaboratorsDto;
    }

    public void setProjectCollaboratorsDto(List<ProjectCollaborator> projectCollaboratorsDto) {
        this.projectCollaboratorsDto = projectCollaboratorsDto;
    }

    public List<ProjectSkills> getProjectSkillsDto() {
        return projectSkillsDto;
    }

    public void setProjectSkillsDto(List<ProjectSkills> projectSkillsDto) {
        this.projectSkillsDto = projectSkillsDto;
    }
}
