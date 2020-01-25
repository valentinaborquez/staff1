package com.project.service;

import com.project.dto.ReqUserDto;
import com.project.dto.ResponseCollaboratorDto;
import com.project.dto.ResponseUserDto;
import com.project.model.Collaborator;
import com.project.model.User;

import java.util.List;

public interface IUserService {
    ResponseUserDto validateUser(String email, String password) throws Exception;
    User saveUser(User objUser) throws Exception;
    User searchById(Long obId) throws Exception;
    ResponseUserDto updateUser(Long id_user, ReqUserDto objReqUserDto) throws Exception;
    boolean deleteUser(Long id) throws Exception;

    ResponseUserDto saveUser(String email, String password) throws Exception;
    User findById(Long objId) throws Exception;



}
