package com.app.ezride.service.impl;

import com.app.ezride.dto.DriverDto;
import com.app.ezride.pojo.Admin;
import com.app.ezride.pojo.Customer;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.Ride;
import com.app.ezride.pojo.User;
import com.app.ezride.repositories.AdminRepo;
import com.app.ezride.repositories.DriverRepo;
import com.app.ezride.repositories.RideRepo;
import com.app.ezride.repositories.UserRepo;
import com.app.ezride.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private UserRepo userRepo;
    
    @Autowired
    private RideRepo rideRepo;

    @Override
    public void addAdmin(User user) {
        Admin admin = new Admin(user);
        admin.addUser(user);
        adminRepo.save(admin);
    }
    @Override
    public List<DriverDto> getListOfDrivers() {
        List<DriverDto> listOfDriver = new ArrayList<>();
        List<Driver> objectDriverList = driverRepo.findAll();
        for (int i = 0; i < objectDriverList.size(); i++) {
            User user = objectDriverList.get(i).getUser();
            DriverDto driverDto = new DriverDto(
            		objectDriverList.get(i).getUser().getId(),
            		objectDriverList.get(i).getUser().getName(),
                    objectDriverList.get(i).getUser().getMobileNumber(),
                    objectDriverList.get(i).getUser().getEmail(),
                    objectDriverList.get(i).getUser().getAadhar(),
                    objectDriverList.get(i).getUser().getPassword(),
                    objectDriverList.get(i).getUser().getRole(),
                    objectDriverList.get(i).getVehicleNumber(),
                    objectDriverList.get(i).getVehicleType(),
                    objectDriverList.get(i).getVehicleName(),
                    objectDriverList.get(i).getCapacity()
            );
            listOfDriver.add(driverDto);
        }
        return listOfDriver;
    }
    @Override
    public List<User> getUserList(){
        return userRepo.findAll().stream().filter(t1 -> t1.getRole().toString().equals("CUSTOMER")).collect(Collectors.toList());
    }
    @Override
    public List<User> getAdminList(){
        return userRepo.findAll().stream().filter(t1 -> t1.getRole().toString().equals("ADMIN")).collect(Collectors.toList());
    }
    @Override
	public void deleteAdmin(int adminId) {
		Admin admin = adminRepo.findById(adminId)
				.orElseThrow(() -> new RuntimeException("Customer not found"));
		int userId = admin.getUser().getId();
		admin.setUser(null);
		userRepo.deleteById(userId);
		adminRepo.deleteById(adminId);
	}
    
    @Override
    public List<Ride> authorizeAll(){
    	List<Ride> list=rideRepo.findAll();
    	for(int i=0;i<list.size();i++) {
    	list.get(i).setVerificationStatus(true);
    	}
    	return list ;
    }
}

