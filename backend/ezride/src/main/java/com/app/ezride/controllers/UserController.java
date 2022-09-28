package com.app.ezride.controllers;

import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.User;
import com.app.ezride.repositories.UserRepo;
import com.app.ezride.service.impl.CustomerServiceImpl;
import com.app.ezride.service.impl.DriverServiceImpl;
import com.app.ezride.service.impl.UserServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private CustomerServiceImpl customerService;

	@Autowired
	private DriverServiceImpl driverService;
	
	  @Autowired
      private UserRepo userRepository;

  
  @GetMapping("/get_user")
  public List < User > getUsers() {
      return this.userRepository.findAll();
  }
  
  @GetMapping("/aws_home")
  public String getAws() {
      return " Backend using aws";
  }
  

	@PostMapping("/add_user")
	public ResponseEntity<String> addUser(@RequestBody UserDto userDto) {
		User user = userService.addUser(userDto);
		if (user.getRole().toString().equals("CUSTOMER")) {
			customerService.addCustomer(user);
		}
		if (user.getRole().toString().equals("DRIVER")) {
			driverService.addDriver(userDto, user);
		}
		return new ResponseEntity<>("User added successfully", HttpStatus.OK);
	}

}
