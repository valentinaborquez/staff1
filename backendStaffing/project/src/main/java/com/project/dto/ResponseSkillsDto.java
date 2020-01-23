package com.project.dto;

import com.project.model.CollaboratorSkills;
import com.project.model.ProjectSkills;

import java.util.List;

public class ResponseSkillsDto {
    private Long id_skillDto;
    private String nameDto;
    private List<CollaboratorSkills> collaboratorSkillsDto;
    private List<ProjectSkills> projectSkillsDto;
}
