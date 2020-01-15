package com.project.imp;

import com.project.model.User;
import com.project.repository.UserRepository;
import com.project.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserImp implements IUserService {
    @Autowired
    private UserRepository UserRepository;

    @Override
    public User saveUser(User objUser) {
        User UserLocal = null;

        try{
            UserLocal =  UserRepository.save(objUser);
            //UserLocal
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return UserLocal;
    }

    @Override
    public User findById(Long objId) {
        User UserLocal = null;
        try{
            //UserLocal
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return UserLocal;

    }
}
