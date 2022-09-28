package com.app.ezride.repositories;

import com.app.ezride.pojo.Admin;
import com.app.ezride.pojo.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {
	
	@Query(value="select id from Admin a where a.user_id=:id ",nativeQuery = true)
	public Integer authencticateAdmin(Integer id);
	
	@Query(value = "select * from Admin d where d.user_id = :id" ,nativeQuery=true )
	public Admin getAdmin(Integer id);
}
