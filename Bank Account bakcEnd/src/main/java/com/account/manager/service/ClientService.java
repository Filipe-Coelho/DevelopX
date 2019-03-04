package com.account.manager.service;

import java.util.List;

import com.account.manager.exceptions.ClientException;
import com.account.manager.model.Client;

/**
 * @author Filipe
 *
 */
public interface ClientService{
	
	/**
	 * Find all clients
	 */
	public static final String QUERY_FIND_ALL = "SELECT * FROM CLIENT";
	
	/**
	 * Query responsible to create a client into the database 
	 */
	public static final String QUERY_NEXT_ID = "SELECT (COUNT(*) + 1) AS ID FROM CLIENT";

	public static final String QUERY_CREATE_CLIENT = "INSERT INTO CLIENT(clientname,incldate) VALUES(?,?)";
	
	public static final String QUERY_UPDATE_CLIENT = " UPDATE CLIENT "
													+" SET CLIENTNAME  = \"?\" "
													+" WHERE CLIENTID = ? ";
	
	public static final String QUERY_DELETE_CLIENT = " DELETE CLIENT "
													+" WHERE CLIENTID = ? ";
	
	
	
	/**
	 * @return
	 * @throws ClientException
	 */
	public boolean createClient(Client client) throws ClientException;
	
	/**
	 * @return
	 * @throws ClientException
	 */
	public boolean updateClient(Client client) throws ClientException;
	
	/**
	 * @return
	 * @throws ClientException
	 */
	public void deleteClient(Client client) throws ClientException;
	
	/**
	 * @return
	 * @throws ClientException
	 */
	public List<Client> findAll() throws ClientException;
	/**
	 * @param id
	 * @return
	 * @throws ClientException
	 */
	public Client findById(Long id) throws ClientException;

	Client findByIdentifier(Long Identifier) throws ClientException;
	
}
