package com.project.service;

import com.project.dto.ReqCollaboratorDto;
import com.project.dto.ResponseCollaboratorDto;
import com.project.model.Collaborator;

public interface ICollaboratorService {

    ResponseCollaboratorDto saveCollaborator(ReqCollaboratorDto objReqCollaboratorDto) throws Exception;
    Collaborator findByAsignado(byte asignado) throws Exception;

}
