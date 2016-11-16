package com.soprasteria.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="user")
public class User {

	public User(){}
	
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	

	@Column(name = "username", nullable = false, length=40)
	private String username;
	

	@Column(name = "password", nullable = false, length=40)
	private String password;


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getId() {
		return id;
	}
	
	
}
