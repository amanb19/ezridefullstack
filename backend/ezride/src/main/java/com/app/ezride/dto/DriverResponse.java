package com.app.ezride.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
//@AllArgsConstructor
public class DriverResponse {

	private Integer uid;
	private String name;
	private String email;
	private long mobileNumber;
	private long aadhar;
	private String vehicleNo;
	private Integer did;
	private int capacity;
	private String vehicleType;
	private String vehicleName;

	public DriverResponse(Integer uid, String name, String email, long mobileNumber, long aadhar, String vehicleNo,
			Integer did, int capacity, String vehicleType, String vehicleName) {
		super();
		this.uid = uid;
		this.name = name;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.aadhar = aadhar;
		this.vehicleNo = vehicleNo;
		this.did = did;
		this.capacity = capacity;
		this.vehicleName = vehicleName;
		this.vehicleType = vehicleType;
	}

}
