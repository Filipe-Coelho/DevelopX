package com.account.manager.service;

import java.io.Serializable;
import java.util.List;

import com.account.manager.exceptions.ClientException;
import com.account.manager.exceptions.NoteException;
import com.account.manager.model.Client;
import com.account.manager.model.Note;
import com.fasterxml.jackson.core.JsonProcessingException;

/**
 * @author Filipe
 *
 */
public interface NoteService extends Serializable{

	/**S
	 * @param amount
	 * @return
	 * @throws JsonProcessingException 
	 * @throws ClientException
	 */
	public List<Note> withdraw(Long amount, Client client) throws NoteException, JsonProcessingException;
	
	
}
