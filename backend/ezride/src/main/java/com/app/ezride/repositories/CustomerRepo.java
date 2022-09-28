package com.app.ezride.repositories;

import com.app.ezride.pojo.Customer;
import com.app.ezride.pojo.Driver;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {


@Query(value="select id from Customer a where a.user_id=:id ",nativeQuery = true)
public Integer authencticateCustomer(Integer id);

@Query(value = "select * from Customer d where d.user_id = :id" ,nativeQuery=true )
public Customer getCustomer(Integer id);
}