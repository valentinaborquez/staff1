package com.project.model;
import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name= "USERS")
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

    @Column(name = "rol" , nullable = false)
    private byte rol;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Administrator administrator;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Collaborator collaborator;

    public void setId_user(Long id_user) {
        this.id_user = id_user;
    }

    public byte getRol() {
        return rol;
    }

    public void setRol(byte rol) {
        this.rol = rol;
    }

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

    public Administrator getAdministrator() {  return administrator;   }

    public void setAdministrator(Administrator administrator) {  this.administrator = administrator;  }

    public Collaborator getCollaborator() {  return collaborator;  }

    public void setCollaborator(Collaborator collaborator) {  this.collaborator = collaborator;  }
}
