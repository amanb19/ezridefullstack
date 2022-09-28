package com.app.ezride.service;

import com.app.ezride.dto.DriverUpdateDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.User;

public interface IDriverService {
    public void addDriver(UserDto userDto, User user);

	public void deleteDriver(int driverId);
	
	 public Integer findByEmailAndPassword(Integer id);

	public String updateDriver(Integer driverId, DriverUpdateDto d);
	
}
