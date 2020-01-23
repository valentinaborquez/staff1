package com.project.imp;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResponseProjectDto;
import com.project.model.Project;
import com.project.service.IProjectService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectImp implements IProjectService {

    @Override
    public List<Project> listarProject() throws Exception {
        return null;
    }

    @Override
    public ResponseProjectDto guardarProject(ReqProjectDto reqProjectDtoDto) throws Exception {
        return null;
    }

    @Override
    public boolean eliminar(String nameProject) throws Exception {
        return false;
    }
}

