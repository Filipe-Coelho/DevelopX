package com.account.manager.model;

import java.io.IOException;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author Filipe
 *
 */
@Entity
@Table(name="accounthistory")
public class History implements Serializable {

	private static final long serialVersionUID = 8843813251805501205L;

	@Column(name="accounthistoryid")
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(updatable=false, name="clientid", referencedColumnName="clientid")
	private Client client;
	
	@Column(name="withdrawDate")
	private Date withdrawDate;
	
	@Column(name="amount")
	private Long withdrawAmount;
	
	@Column(name="notes")
	private String notes;
	
	public Long getId() {
		return id;
	}
	public History setId(Long id) {
		this.id = id;
		return this;
	}
	public Client getClient() {
		return client;
	}
	public History setClient(Client client) {
		this.client = client;
		return this;
	}
	public Date getWithdrawDate() {
		return withdrawDate;
	}
	public History setWithdrawDate(Date withdrawDate) {
		this.withdrawDate = withdrawDate;
		return this;
	}
	public Long getWithdrawAmount() {
		return withdrawAmount;
	}
	public History setWithdrawAmount(Long withdrawAmount) {
		this.withdrawAmount = withdrawAmount;
		return this;
	}
	
	public Note[] getNotes() {
		try {
			return new ObjectMapper().readValue(this.notes, Note[].class);
		} catch (IOException e) {
			System.out.println(e);
			return null;
		}  
	}
	
	public History setNotes(String notes) {
		this.notes = notes;
		return this;
	}
	
	
}
