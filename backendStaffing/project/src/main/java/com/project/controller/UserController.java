package com.project.controller;

import com.project.imp.UserImp;
import com.project.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserImp userImp;

    @RequestMapping(method = RequestMethod.POST)
    public User saveUser(@RequestBody User user){
        User userController = null;
        try{
            userController = userImp.saveUser(user);

        }catch (Exception ex){
            ex.printStackTrace();
        }
        return userController;

    }


}

