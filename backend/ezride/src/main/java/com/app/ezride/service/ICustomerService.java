package com.app.ezride.service;

import com.app.ezride.dto.CustomerUpdateDto;
import com.app.ezride.dto.DriverUpdateDto;
import com.app.ezride.dto.UserDto;
import com.app.ezride.pojo.User;

public interface ICustomerService {
    public void addCustomer(User user);

	public void deleteCustomer(int customerId);
	
	public String updateCustomer(Integer customerId, CustomerUpdateDto c);
}
