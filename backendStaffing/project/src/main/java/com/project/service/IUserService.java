package com.project.service;

import com.project.model.User;

public interface IUserService {
    User saveUser(User objUser);
    User findById(Long objId);

}
