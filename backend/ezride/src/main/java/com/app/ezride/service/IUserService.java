package com.app.ezride.service;

import com.app.ezride.dto.AdminResponse;
import com.app.ezride.dto.CustomerResponse;
import com.app.ezride.dto.DriverResponse;
import com.app.ezride.dto.LoginDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.User;

import java.util.List;

public interface IUserService {
    public User addUser(UserDto user);

    public User findByEmailAndPassword(LoginDto dto);

    public DriverResponse extractDriver(User user);
    
    public List<User> findByRole(String role);

	CustomerResponse extractCustomer(User user);

	AdminResponse extractAdmin(User user);
}
