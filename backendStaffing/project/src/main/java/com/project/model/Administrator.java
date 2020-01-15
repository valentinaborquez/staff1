package com.project.model;


import com.project.imp.UserImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name= "Administrator")
public class Administrator {


}
