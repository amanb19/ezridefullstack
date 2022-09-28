package com.app.ezride.controllers;

import com.app.ezride.dto.DriverDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.Ride;
import com.app.ezride.pojo.User;
import com.app.ezride.service.impl.AdminServiceImpl;
import com.app.ezride.service.impl.CustomerServiceImpl;
import com.app.ezride.service.impl.DriverServiceImpl;
import com.app.ezride.service.impl.RideServiceImpl;
import com.app.ezride.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/main_admin")
public class MainAdminController {

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private AdminServiceImpl adminService;

	@Autowired
	private RideServiceImpl rideService;

	@Autowired
	private DriverServiceImpl driverService;

	@Autowired
	private CustomerServiceImpl customerService;

	@PostMapping("/add_admin")
	public ResponseEntity<String> addAdmin(@RequestBody UserDto userDto) {
		User user = null;
		if (userDto.getRole().toString().equals("ADMIN")) {
			user = userService.addUser(userDto);
		}
		adminService.addAdmin(user);
		return new ResponseEntity<>("Admin added successfully", HttpStatus.OK);
	}

	@GetMapping("/get_all_drivers")
	public ResponseEntity<List<DriverDto>> getAllDrivers() {
		List<DriverDto> list = adminService.getListOfDrivers();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/get_all_customer")
	public ResponseEntity<List<User>> getAllCustomers() {
		List<User> list = adminService.getUserList();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/get_all_admin")
	public ResponseEntity<List<User>> getAllAdmin() {
		return new ResponseEntity<>(adminService.getAdminList(), HttpStatus.OK);
	}

	@GetMapping("/get_all_rides")
	public ResponseEntity<List<Ride>> getAllRides() {
		return new ResponseEntity<>(rideService.getAllRides(), HttpStatus.OK);
	}

	@DeleteMapping("/delete_rides/{ride_id}/{driver_id}")
	public ResponseEntity<String> deleteRide(@PathVariable(name = "ride_id") int rideID,
			@PathVariable(name = "ride_id") int driverId) {
		rideService.deleteRide(rideID, driverId);
		return new ResponseEntity<>("Ride deleted successfully", HttpStatus.OK);
	}

	@DeleteMapping("/delete_driver/{driver_id}")
	public ResponseEntity<String> deleteDriver(@PathVariable(name = "driver_id") int driverId) {
		driverService.deleteDriver(driverId);
		return new ResponseEntity<>("Driver deleted successfully", HttpStatus.OK);
	}

	@DeleteMapping("/delete_customer/{customer_id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable(name = "customer_id") int customerId) {
		customerService.deleteCustomer(customerId);
		return new ResponseEntity<>("Customer deleted successfully", HttpStatus.OK);
	}

	@DeleteMapping("/delete_admin/{admin_id}")
	public ResponseEntity<String> deleteAdmin(@PathVariable(name = "admin_id") int adminId) {
		adminService.deleteAdmin(adminId);
		return new ResponseEntity<>("Admin deleted successfully", HttpStatus.OK);
	}

}
