package com.app.ezride.service.impl;

import com.app.ezride.dto.AdminResponse;
import com.app.ezride.dto.CustomerResponse;
import com.app.ezride.dto.DriverResponse;
import com.app.ezride.dto.LoginDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.Admin;
import com.app.ezride.pojo.Customer;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.Role;
import com.app.ezride.pojo.User;
import com.app.ezride.repositories.AdminRepo;
import com.app.ezride.repositories.CustomerRepo;
import com.app.ezride.repositories.DriverRepo;
import com.app.ezride.repositories.UserRepo;
import com.app.ezride.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserRepo userRepo;
    
    @Autowired
    private DriverRepo driverRepo;
    
    @Autowired
    private CustomerRepo customerRepo;
    
    @Autowired
    private AdminRepo adminRepo;

    @Override
    public User addUser(UserDto userDto) {
        User user = new User(userDto.getName(), userDto.getMobileNumber(), userDto.getEmail(), userDto.getAadhar(), userDto.getPassword(), userDto.getRole());
        userRepo.save(user);
        return user;
    }

    @Override
    public User findByEmailAndPassword(LoginDto dto) {
        User user = userRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
        if(user == null){
            throw new RuntimeException("User not found");
        }
        return user;
    }

    @Override
    public List<User> findByRole(String role) {  // HIBERNATE Bug
        List <User> userList = userRepo.findByRole(role);
        return  userList;
    }
   
    @Override
    public DriverResponse extractDriver(User user) {
    	System.out.println("inside user service impls");
    	System.out.println(user.toString());
    	Driver driver = driverRepo.getDriver(user.getId());
    	return new DriverResponse(user.getId(),user.getName(),user.getEmail(),user.getMobileNumber(),user.getAadhar(),driver.getVehicleNumber(),driver.getId(),driver.getCapacity(),driver.getVehicleType().toString(),driver.getVehicleName());
    }
   
    @Override
    public CustomerResponse extractCustomer(User user) {
    	System.out.println("inside user service impls");
    	System.out.println(user.toString());
    	Customer customer = customerRepo.getCustomer(user.getId()); 	
    	return new CustomerResponse(customer.getId(),user.getName(),user.getMobileNumber(),user.getEmail(),user.getAadhar(),user.getId());	
    }
    
    @Override
    public AdminResponse extractAdmin(User user) {
    	System.out.println("inside user service impls");
    	System.out.println(user.toString());
    	Admin admin = adminRepo.getAdmin(user.getId()); 	
    	return new AdminResponse(admin.getId(),user.getName(),user.getMobileNumber(),user.getEmail(),user.getAadhar(),user.getId());
    }	
}

