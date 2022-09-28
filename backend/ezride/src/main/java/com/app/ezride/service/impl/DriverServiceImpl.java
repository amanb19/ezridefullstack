package com.app.ezride.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ezride.dto.DriverUpdateDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.User;
import com.app.ezride.pojo.VehicleType;
import com.app.ezride.repositories.DriverRepo;
import com.app.ezride.repositories.UserRepo;
import com.app.ezride.service.IDriverService;


@Service
@Transactional
public class DriverServiceImpl implements IDriverService {

   
    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private UserRepo userRepo;
    

    @Override
    public void addDriver(UserDto userDto, User user) {
        Driver driver = new Driver(userDto.getDriverDto().getVehicleNumber(), userDto.getDriverDto().getVehicleType(), userDto.getDriverDto().getVehicleName(), userDto.getDriverDto().getCapacity(), user);
        driverRepo.save(driver);
    }
    @Override
    public void deleteDriver(int driverId) {
        Driver driver = driverRepo.findById(driverId).orElseThrow(() -> new RuntimeException("Driver not found"));
        int userId = driver.getUser().getId();
        driver.setUser(null);
        userRepo.deleteById(userId);
        driverRepo.deleteById(driverId);
  }
  @Override
  public String updateDriver(Integer driverId,DriverUpdateDto d) {
	  Driver update = driverRepo.findById(driverId).orElseThrow(() -> new RuntimeException("Driver not found"));
		update.setVehicleName(d.getVehicleName());
		update.setVehicleType(VehicleType.valueOf(d.getVehicleType()));
		update.setVehicleNumber(d.getVehicleNo());
		update.setCapacity(d.getCapacity());
		Integer id = update.getUser().getId();
		User u = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found: " + id));
		u.setName(d.getName());
		u.setMobileNumber(d.getMobileNumber());
		u.setAadhar(d.getAadhar());
		u.setPassword(d.getPassword());
		userRepo.save(u);
		driverRepo.save(update);
	  return "Updated Successfully";
	  	 
  }
  
  public Integer findByEmailAndPassword(Integer id) {
	  
		 return driverRepo.authencticateDriver(id);
	  }
}
