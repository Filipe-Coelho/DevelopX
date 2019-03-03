package com.account.manager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.account.manager.exceptions.ClientException;
import com.account.manager.exceptions.HistoryException;
import com.account.manager.model.Client;
import com.account.manager.model.History;
import com.account.manager.repository.HistoryRepository;

/**
 * @author Filipe
 *
 */
@Component
@Qualifier("HistoryServiceImpl")
public class HistoryServiceImpl implements HistoryService{
	
	@Autowired
	private HistoryRepository historyRepository;

	@Override
	public History findClientHistory(Client client) throws HistoryException {
		return null;
	}

	@Override
	public List<History> findAll() throws HistoryException {
		return (List<History>) historyRepository.findAll();
	}
	
	@Override
	public History findById(Long id) throws HistoryException {
		return historyRepository.findById(id).get();
	}
	
	@Override
	public void delete(History history) throws HistoryException {
		historyRepository.delete(history);
		if (historyRepository.existsById(history.getId()))
			 throw new HistoryException("Could not delete History with ID "+history.getId());
	}
	
	

	

}
