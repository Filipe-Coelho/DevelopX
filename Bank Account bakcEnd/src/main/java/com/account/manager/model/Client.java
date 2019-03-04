package com.account.manager.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Filipe
 *
 */
@Entity
@Table(name="client")
public class Client implements Serializable {

	private static final long serialVersionUID = 8843813251805501205L;

	@Column(name="clientid")
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="identifier", nullable=false, unique= true)
	private Long identifier;
	
	@Column(name="clientname")
	private String name;
	
	@Column(name="incldate")
	private Date createTime;
	
	public Long getIdentifier() {
		return identifier;
	}

	public Client setIdentifier(Long identifier) {
		this.identifier = identifier;
		return this;
	}

	public Long getId() {
		return id;
	}
	
	public Client setId(Long id) {
		this.id = id;
		return this;
	}
	
	public String getName() {
		return name;
	}
	
	public Client setName(String name) {
		this.name = name;
		return this;
	}
	
	public Date getCreateTime() {
		return createTime;
	}
	
	public Client setCreateTime(Date createTime) {
		this.createTime = createTime;
		return this;
	}
	
}
