package com.project.dto;

import com.project.model.CollaboratorSkills;
import com.project.model.ProjectCollaborator;
import com.project.model.User;

import java.util.List;

public class ReqCollaboratorDto {
    private Long id_collaboratorDto;
    private String nameDto;
    private String lastNameDto;
    private String dniDto;
    private String positionDto;
    private List<ProjectCollaborator> projectCollaboratorsDto;
    private List<CollaboratorSkills> collaboratorSkillsDto;
    private User userDto;

}
