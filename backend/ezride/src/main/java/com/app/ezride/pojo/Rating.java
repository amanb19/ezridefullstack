package com.app.ezride.pojo;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rating {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer Id;
	
	@Column(name = "rating")
   private Double rating;	
	
	 @OneToOne
	@JoinColumn(name="rating_id")
	private Ride ride;
	
	public Rating(Ride ride) {
		this.ride=ride;
	}
}
