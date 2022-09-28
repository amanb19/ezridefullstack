package com.app.ezride.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;

import com.app.ezride.pojo.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AdminResponse {

	private Integer aid;
	private String name;
	private long mobileNumber;
	private String email;
	private long aadhar;

	private Integer uid;

	public AdminResponse (Integer aid,String name,long mobileNumber,String email,long aadhar,Integer uid) {
		super();
		this.aid=aid;
		this.name=name;
		this.mobileNumber=mobileNumber;
	    this.email=email;
	    this.aadhar=aadhar;
	    this.uid=uid;
	}
	
}