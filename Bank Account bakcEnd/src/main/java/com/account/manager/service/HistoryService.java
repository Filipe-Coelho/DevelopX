package com.account.manager.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.account.manager.exceptions.HistoryException;
import com.account.manager.model.Client;
import com.account.manager.model.History;

/**
 * @author Filipe
 *
 */
@Component
public interface HistoryService {
	 
	/**
	 * @param client
	 * @return
	 * @throws HistoryException
	 */
	public History findClientHistory(Client client) throws HistoryException ;
	
	/**
	 * @return
	 * @throws HistoryException
	 */
	public List<History> findAll() throws HistoryException ;
	
	/**
	 * @return
	 * @throws HistoryException
	 */
	public History findById(Long id) throws HistoryException ;
	
	/**
	 * @param history
	 * @throws HistoryException
	 */
	public void delete(History history) throws HistoryException;
	
	
	
	
	
}
