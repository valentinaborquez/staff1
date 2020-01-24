package com.project.service;

import com.project.dto.ReqCollaboratorDto;
import com.project.dto.ResponseCollaboratorDto;
import com.project.model.Collaborator;

import java.util.List;

public interface ICollaboratorService {

    ResponseCollaboratorDto saveCollaborator(ReqCollaboratorDto objReqCollaboratorDto) throws Exception;
    Collaborator findByAsignado(byte asignado) throws Exception;
    List<Collaborator> listCollaborator() throws Exception;
    Collaborator searchByDni(String dni) throws Exception;




}
