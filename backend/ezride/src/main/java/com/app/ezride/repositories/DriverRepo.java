package com.app.ezride.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.ezride.pojo.Driver;

public interface DriverRepo extends JpaRepository<Driver, Integer> {
	
	@Query(value="select id from Driver a where a.user_id=:id ",nativeQuery = true)
	public Integer authencticateDriver(Integer id);
	
	   @Query(value = "select * from Driver d where d.user_id = :id" ,nativeQuery=true )
	    public Driver getDriver(Integer id);
}
