package com.project.service;

import com.project.model.User;

import java.util.List;

public interface IUserService {
    User saveUser(User objUser) throws Exception;
    User findById(Long objId) throws Exception;
}
