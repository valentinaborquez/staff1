package com.project.service;

import com.project.dto.ReqUserDto;
import com.project.dto.ResponseCollaboratorDto;
import com.project.dto.ResponseUserDto;
import com.project.model.Collaborator;
import com.project.model.User;

import java.util.List;

public interface IUserService {
    ResponseUserDto saveUser(String email, String password) throws Exception;
    User saveUser(User objUser) throws Exception;
    User findById(Long objId) throws Exception;
    ResponseCollaboratorDto validateUser(ReqUserDto objReqUserDto) throws Exception;
    ResponseUserDto updateUser(Long id_user, ReqUserDto objReqUserDto) throws Exception;


}
