package com.account.manager.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.account.manager.exceptions.ClientException;
import com.account.manager.model.Client;
import com.account.manager.repository.ClientRepository;

/**
 * @author Filipe
 *
 */
@Component
@Qualifier("ClientServiceImpl")
public class ClientServiceImpl implements ClientService{
	
	@Autowired
	private ClientRepository clientRepository;

	@Override
	public boolean createClient(Client client) throws ClientException {
		if(clientRepository.save(client.setCreateTime(new Date()))==null) {
			throw new ClientException("Could not create client");
		}
		return true;
		 
	}

	@Override
	public boolean updateClient(Client client) throws ClientException {
		if(clientRepository.save(client.setCreateTime(new Date()))==null) {
			throw new ClientException("Could not update client");
		}
		return true;
	}

	@Override
	public void deleteClient(Client client) throws ClientException, ConstraintViolationException {
		clientRepository.delete(client);
		if (clientRepository.existsById(client.getId()))
			 throw new ClientException("Could not delete Client with ID "+client.getId());
	}

	@Override
	public List<Client> findAll() throws ClientException {
		return (List<Client>) clientRepository.findAll();
	}

	@Override
	public Client findById(Long id) throws ClientException {
		 Optional<Client> returnedClient = clientRepository.findById(id);
		 return returnedClient.get();
	}	
	
	
	@Override
	public Client findByIdentifier(Long Identifier) throws ClientException {
		 return  clientRepository.findByIdentifier(Identifier);
	}	
	
	
	
}
