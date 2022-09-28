package com.app.ezride.service;


import com.app.ezride.dto.DriverDto;
import com.app.ezride.pojo.Admin;
import com.app.ezride.pojo.Ride;
import com.app.ezride.pojo.User;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.transaction.Transactional;

public interface IAdminService {

    public void addAdmin(User user);

	List<DriverDto> getListOfDrivers();

	List<User> getUserList();

	List<User> getAdminList();

	void deleteAdmin(int adminId);
	
	public List<Ride> authorizeAll();
}
