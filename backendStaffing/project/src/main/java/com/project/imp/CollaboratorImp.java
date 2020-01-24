package com.project.imp;

import com.project.dto.ReqCollaboratorDto;
import com.project.dto.ResponseCollaboratorDto;
import com.project.dto.ResponseUserDto;
import com.project.model.Collaborator;
import com.project.service.ICollaboratorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollaboratorImp implements ICollaboratorService {

      @Override
    public ResponseCollaboratorDto saveCollaborator(ReqCollaboratorDto objReqCollaboratorDto) throws Exception {
          /*ResponseCollaboratorDto objResponseCollaboratorDto;
          Collaborator objCollaboratorName;
          Collaborator objCollaboratorLastName;
          Collaborator objCollaboratorDni;
          Collaborator objCollaboratorPosition;
          ResponseUserDto objResponseUserDto;*/

          try {

          }catch (Exception ex){
              ex.printStackTrace();

          }
          return null;
    }

    @Override
    public Collaborator findByAsignado(byte asignado) throws Exception {
        return null;
    }

    @Override
    public List<Collaborator> listCollaborator() throws Exception {
        return null;
    }

    @Override
    public Collaborator searchByDni(String dni) throws Exception {
        return null;
    }
}
