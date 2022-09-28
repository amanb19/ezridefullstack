package com.app.ezride.service.impl;

import com.app.ezride.dto.CustomerUpdateDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.Customer;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.User;
import com.app.ezride.pojo.VehicleType;
import com.app.ezride.repositories.CustomerRepo;
import com.app.ezride.repositories.UserRepo;
import com.app.ezride.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private UserRepo userRepo;

	@Override
	public void addCustomer(User user) {
		Customer customer = new Customer(user);
		customerRepo.save(customer);
	}
	@Override
	public void deleteCustomer(int customerId) {
		Customer customer = customerRepo.findById(customerId)
				.orElseThrow(() -> new RuntimeException("Customer not found"));
		int userId = customer.getUser().getId();
		customer.setUser(null);
		userRepo.deleteById(userId);
		customerRepo.deleteById(customerId);
	}
	@Override
	public String updateCustomer(Integer customerId, CustomerUpdateDto c) {
		 Customer update = customerRepo.findById(customerId).orElseThrow(() -> new RuntimeException("Driver not found"));
			Integer id = update.getUser().getId();
			User u = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found: " + id));
			u.setName(c.getName());
			u.setMobileNumber(c.getMobileNumber());
			u.setAadhar(c.getAadhar());
			u.setEmail(c.getEmail());
			u.setPassword(c.getPassword());
			userRepo.save(u);
			customerRepo.save(update);
		  return "Updated Successfully";
	  
	}
}
