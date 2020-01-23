package com.project.service;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResponseProjectDto;
import com.project.model.Project;
import  java.util.List;
public interface IProjectService {

    List<Project> listProject()throws Exception;
    ResponseProjectDto saveProject(ReqProjectDto reqProjectDtoDto) throws Exception;
    Project searchByName(String name) throws Exception;
}
