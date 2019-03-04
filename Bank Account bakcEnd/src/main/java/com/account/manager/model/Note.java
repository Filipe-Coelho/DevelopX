package com.account.manager.model;

import java.io.Serializable;

/**
 * @author Filipe
 *
 */
public class Note implements Serializable {
		
	private static final long serialVersionUID = -1662421162061514776L;
	
	private String name;
	private Integer quantity;
	
	
	public Note() {
	}
	
	public Note(String name, Integer quantity) {
		this.name = name;
		this.quantity = quantity;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	

	
}
