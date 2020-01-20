package com.project.model;
import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name= "User")
public class User {
    @Id
    @Column(name = "id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;

    @Column(name = "email", unique = true, nullable = false)
    @Email
    private String email;

    @Column(name = "password" , nullable = false)
    private String password;

    public long getId_user() {
        return id_user;
    }

    public void setId_user(long id_user) {
        this.id_user = id_user;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



}
