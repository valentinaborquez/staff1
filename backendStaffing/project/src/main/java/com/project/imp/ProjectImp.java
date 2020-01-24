package com.project.imp;

import com.project.dto.ReqProjectDto;
import com.project.dto.ResponseProjectDto;
import com.project.model.Project;
import com.project.repository.ProjectRepository;
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
    public Project searchByName(String name) throws Exception {
        return null;
    }
    @Autowired
    public ResponseProjectDto saveProject (ReqProjectDto reqProjectDto ) throws Exception{

        ResponseProjectDto ResponseProjectDtoDto,

                reqProjectDtoDto = new reqProjectDtoDto,

        reqProjectDtoDto.setNameDto(nameDto);

        reqProjectDtoDto.setDescriptionDto(descriptionDto);


        Return responseProjectDtoDto:
    }




    }
}

