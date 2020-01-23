package com.project.dto;

import com.project.model.ProjectCollaborator;
import com.project.model.ProjectSkills;

import java.util.List;

public class ResponseProjectDto {

    private Long id_projectDto;
    private String nameDto;
    private String descriptionDto;
    private String start_dateDto;
    private String end_dateDto;
    private List<ProjectCollaborator> projectCollaboratorsDto;
    private List<ProjectSkills> projectSkillsDto;
}

