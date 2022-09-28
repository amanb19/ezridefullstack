package com.app.ezride.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ezride.dto.LoginDto;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.User;
import com.app.ezride.repositories.DriverRepo;
import com.app.ezride.service.ICustomerService;
import com.app.ezride.service.IDriverService;
import com.app.ezride.service.impl.UserServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private IDriverService driverservice;
	
	@Autowired
	private ICustomerService customerService;

	@PostMapping("/driverlogin")
	public ResponseEntity<?> loginDriver(@RequestBody LoginDto logindto) {
		User user = userService.findByEmailAndPassword(logindto);
		System.out.println(user.toString());
		if (user.getRole().toString().equals("DRIVER")) {
			System.out.println("Inside if " + user.getRole().toString().equals("DRIVER"));
			return new ResponseEntity<>(userService.extractDriver(user), HttpStatus.OK);
		} else
			return new ResponseEntity<>("Invalid Route , Not a Customer ", HttpStatus.BAD_REQUEST);
	}

	@PostMapping("/customerLogin")
	public ResponseEntity<?> loginCustomer( @RequestBody LoginDto logindto) {
		User user = userService.findByEmailAndPassword(logindto);
		System.out.println(user.toString());
		if (user.getRole().toString().equals("CUSTOMER")) {
			System.out.println("Inside if " + user.getRole().toString().equals("CUSTOMER"));
			return new ResponseEntity<>(userService.extractCustomer(user), HttpStatus.OK);
		} else
			return new ResponseEntity<>("Invalid Route , Not a Customer ", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/adminLogin")
	public ResponseEntity<?> loginAdmin(@RequestBody LoginDto logindto) {
		User user = userService.findByEmailAndPassword(logindto);
		System.out.println(user.toString());
		if (user.getRole().toString().equals("ADMIN")) {
			System.out.println("Inside if " + user.getRole().toString().equals("ADMIN"));
			return new ResponseEntity<>(userService.extractAdmin(user), HttpStatus.OK);
		} else
			return new ResponseEntity<>("Invalid Route , Not a Admin ", HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/get_user")
	public ResponseEntity<?> login(@RequestBody User user) {
		if (user.getRole().toString().equals("DRIVER")) {
			Integer id = driverservice.findByEmailAndPassword(user.getId());
			return new ResponseEntity<>(id, HttpStatus.OK);
		}
		return new ResponseEntity<>("driver", HttpStatus.OK);
	}
}
