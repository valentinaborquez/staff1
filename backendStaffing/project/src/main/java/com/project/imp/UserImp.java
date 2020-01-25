package com.project.imp;

import com.project.dto.ReqUserDto;
import com.project.dto.ResponseCollaboratorDto;
import com.project.dto.ResponseUserDto;
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
    public ResponseUserDto saveUser(String email, String password) throws Exception {
        return null;
    }

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
    public User searchById(Long obId) throws Exception {
        return null;
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

    @Override
    public ResponseUserDto validateUser(String email, String password) throws Exception {
        ResponseUserDto objResponseUserDto=null;
        User objUser;
        try {
            objUser = UserRepository.findByEmail(email);
            if (null != email && null != password && null != objUser && objUser.getPassword().equals(password)){
                objResponseUserDto = new ResponseUserDto();
                objResponseUserDto.setEmailDto(objUser.getEmail());
                objResponseUserDto.setRol(objUser.getRol());
            }
        }catch (Exception e){
            throw new Exception("Error valdacion");
        }
        return objResponseUserDto;
    }

    @Override
    public ResponseUserDto updateUser(Long id_user, ReqUserDto objReqUserDto) throws Exception {
        return null;
    }

    @Override
    public boolean deleteUser(Long id) throws Exception {
        return false;
    }
}
