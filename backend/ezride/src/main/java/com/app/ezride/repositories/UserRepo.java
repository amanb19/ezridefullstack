package com.app.ezride.repositories;

import com.app.ezride.dto.DriverResponse;
import com.app.ezride.pojo.Driver;
import com.app.ezride.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	
	
	@Query(value="select * from user a where a.email=:email and a.password=:password",nativeQuery = true)
    public User findByEmailAndPassword(String email, String password);

    public List<User> findByRole(String role);
    
//    @Query("select new com.app.dto.DriverResponse(u.id,u.name,u.email,u.mobileNumber,u.aadhar,d.vehicleNumber,d.id) from Driver d JOIN d.user u")
//	public List<DriverResponse> getDriverList();
    
 
}
