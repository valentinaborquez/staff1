package com.project.model;


import com.project.imp.UserImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.persistence.*;

@Entity
@Table(name= "Administrator")
public class Administrator {

    @Id
    @Column(name = "id_persona")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_administrator;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "lastName", nullable = false)
    private String lastname;
    @OneToOne
    @JoinColumn(name = "id_user", updatable = false, nullable = false)
    private User user;

    public Long getId_administrator() { return id_administrator; }

    public void setId_administrator(Long id_administrator) {  this.id_administrator = id_administrator; }

    public String getName() {  return name;  }

    public void setName(String name) {    this.name = name;  }

    public String getLastname() {  return lastname;  }

    public void setLastname(String lastname) {  this.lastname = lastname;  }

    public User getUser() {  return user;  }

    public void setUser(User user) {   this.user = user;  }

}
