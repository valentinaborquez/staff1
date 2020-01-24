package com.project.imp;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResponseProjectDto;
import com.project.model.Project;
import com.project.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class ProjectImp implements IProjectService {


    @Override
    public List<Project> listProject() throws Exception {
        return null;
    }

    @Override
    public ResponseProjectDto saveProject(ReqProjectDto reqProjectDtoDto) throws Exception {
        return null;
    }

    @Override
    public Project searchByName(String name) throws Exception {
        return null;
    }
}

