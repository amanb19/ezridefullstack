package com.app.ezride.controllers;

import com.app.ezride.dto.CustomerUpdateDto;
import com.app.ezride.dto.DriverUpdateDto;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.Ride;
import com.app.ezride.service.impl.CustomerServiceImpl;
import com.app.ezride.service.impl.DriverServiceImpl;
import com.app.ezride.service.impl.RideServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private RideServiceImpl rideService;
	
	@Autowired
	private CustomerServiceImpl customerService;

	@PostMapping("/get_rides")
	/***
	 * PAYLOAD -> source, destination and proper date
	 */
	public ResponseEntity<List> getRides(@RequestBody Ride ride) {
		return new ResponseEntity<>(rideService.getRides(ride), HttpStatus.OK);
	}

	@PostMapping("/book_rides/{ride_id}")
	public ResponseEntity<String> bookRide(@PathVariable(name = "ride_id") int rideId,
			@RequestParam(name = "customerId") int customerId,
			@RequestParam(name = "numberOfSeats") int numberOfSeats) {
		rideService.bookRide(rideId, customerId, numberOfSeats);
		return new ResponseEntity<>("Ride booked successfully", HttpStatus.OK);
	}
	
	@GetMapping("/confirmride/{ride_id}")
	public ResponseEntity<Driver> confirmRide(@PathVariable Integer ride_id){
		return new ResponseEntity<Driver>(rideService.confirmDriverDetails(ride_id),HttpStatus.OK);
	}
	
	@PutMapping("/update_profile/{customer_id}")
	public ResponseEntity<String> updateCustomer(@PathVariable(name = "customer_id") Integer customerId,
			@RequestBody CustomerUpdateDto c) {
	    
		return new ResponseEntity<>(customerService.updateCustomer(customerId,c), HttpStatus.OK);
	}
}
