package com.app.ezride.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ezride.dto.DriverUpdateDto;
import com.app.ezride.dto.EmailDto;
import com.app.ezride.emailSender.EmailSenderService;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.Ride;
import com.app.ezride.pojo.User;
import com.app.ezride.pojo.VehicleType;
import com.app.ezride.repositories.DriverRepo;
import com.app.ezride.repositories.UserRepo;
import com.app.ezride.service.impl.DriverServiceImpl;
import com.app.ezride.service.impl.RideServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/driver")
public class DriverController {

	@Autowired
	private RideServiceImpl rideService;

	@Autowired
	private DriverServiceImpl driverService;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private DriverRepo driverRepo;

	@Autowired
	private EmailSenderService sendMail;
	
	@PostMapping("/add_rides/{driver_id}")
	public ResponseEntity<String> addRides(@RequestBody Ride ride, @PathVariable(name = "driver_id") int driverId) {
		rideService.addRides(ride, driverId);
		return new ResponseEntity<>("Ride added successfully", HttpStatus.OK);
	}

	@DeleteMapping("/delete_rides/{ride_id}/{driver_id}")
	public ResponseEntity<String> deleteRide(@PathVariable(name = "ride_id") int rideID,
			@PathVariable(name = "driver_id") int driverId) {
		rideService.deleteRide(rideID, driverId);
		return new ResponseEntity<>("Ride deleted successfully", HttpStatus.OK);
	}

	@PutMapping("/update_profile/{driver_id}")
	public ResponseEntity<String> updateDriver(@PathVariable(name = "driver_id") Integer driverId,
			@RequestBody DriverUpdateDto d) {
	    
		return new ResponseEntity<>(driverService.updateDriver(driverId,d), HttpStatus.OK);
	}
	
	@PostMapping("/sendMail")
	public ResponseEntity<?> sendMail(@RequestBody EmailDto e){
		sendMail.sendMail(e.getSendTo(),e.getSubject(), e.getBody());
		return new ResponseEntity<>("mail send successfully", HttpStatus.OK);
	}
}

