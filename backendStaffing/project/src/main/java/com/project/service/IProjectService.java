package com.project.service;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResProjectDto;
import com.project.model.Project;
import  java.util.List;
public interface IProjectService {

    List<Project> listarProject()throws Exception;
    ResProjectDto guardarProject(ReqProjectDto reqProjectDtoDto) throws Exception;

}
