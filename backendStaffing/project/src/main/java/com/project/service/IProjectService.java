package com.project.service;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResponseProjectDto;
import com.project.model.Project;
import  java.util.List;
public interface IProjectService {

    List<Project> listarProject()throws Exception;
    ResponseProjectDto guardarProject(ReqProjectDto reqProjectDtoDto) throws Exception;
    boolean eliminar(String nameProject) throws Exception;
}
