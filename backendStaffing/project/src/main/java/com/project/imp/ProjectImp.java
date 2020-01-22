package com.project.imp;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResProjectDto;
import com.project.model.Project;
import com.project.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectImp implements IProjectService {

    @Override
    public List<Project> listarProject() throws Exception {
        return null;
    }

    @Override
    public ResProjectDto guardarProject(ReqProjectDto reqProjectDtoDto) throws Exception {
        return null;
    }
}

