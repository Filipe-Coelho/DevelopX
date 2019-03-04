package com.account.manager.controller;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.account.manager.exceptions.ClientException;
import com.account.manager.exceptions.NoteException;
import com.account.manager.exceptions.model.ResponseInterface;
import com.account.manager.model.Client;
import com.account.manager.service.ClientService;
import com.account.manager.service.NoteService;
import com.account.manager.utils.Utils;

@RestController
@CrossOrigin(origins="*")
public class ClientController {
	
	
	@Autowired
	@Qualifier(value="ClientServiceImpl")
	private ClientService clientService; 
	
	@Autowired
	@Qualifier(value="NoteServiceImpl")
	private NoteService noteService; 
	

	/**
	 * @param id
	 * @return
	 * @throws ClientException 
	 */
	@ResponseBody
	@RequestMapping(value = "/withdraw/{amount}/{clientIdentifier}", method= RequestMethod.GET)
	public ResponseEntity<ResponseInterface> withdraw(
				@PathVariable("amount") Long amount, 
				@PathVariable("clientIdentifier") Long clientIdentifier) throws NoteException {
		try {
			
			Client client = clientService.findByIdentifier(clientIdentifier) ;
			if(client!=null && client.getId()!=null) {
				return Utils.success(noteService.withdraw(amount, client ));
			}
			return Utils.errorBadRequest(new ClientException("Could not find Client with this identifier "+clientIdentifier), "Error to Withdraw money!");
		} catch (Exception e) {
			System.out.println(e);
			return Utils.errorBadRequest(e, "Error to Withdraw money!");
			
		}
	}
	
	/**
	 * @param id
	 * @return
	 * @throws ClientException 
	 */
	@ResponseBody
	@RequestMapping(value = "/createClient", method= RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public ResponseEntity<ResponseInterface> createClient( @RequestBody Client client) throws ClientException {
		try {
			if(clientService.createClient(client)){
				return Utils.success("Client was created successfully!");
			}else {
				return Utils.errorBadRequest(new ClientException("Error to create Client!"), "Error to create Client!");
			}
		} catch (Exception e) {
			System.out.println(e);
			throw new ClientException("Error to create Client", e);
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateClient", method= RequestMethod.POST, produces = "application/json", consumes = "application/json")
	public ResponseEntity<ResponseInterface> updateClient( @RequestBody Client client) throws ClientException {
		try {
			if(clientService.updateClient(client)){
				return Utils.success("Client was created successfully!");
			}else {
				return Utils.errorBadRequest(new ClientException("Error to create Client!"), "Error to create Client!");
			}
		} catch (Exception e) {
			System.out.println(e);
			throw new ClientException("Error to create Client", e);
		}
	}
	
	/**
	 * @param id
	 * @return
	 * @throws ClientException 
	 */
	@ResponseBody
	@RequestMapping(value = "/clients", method= RequestMethod.GET)
	public ResponseEntity<ResponseInterface> history() throws NoteException {
		try {
			return Utils.success(this.clientService.findAll());
		} catch (Exception e) {
			System.out.println(e);
			return Utils.errorBadRequest(e, "Error to find clients!");
			
		}
	}
	
	
	@ResponseBody
	@RequestMapping(value = "/deleteClient/{id}", method= RequestMethod.GET)
	public ResponseEntity<ResponseInterface> deleteClient(@PathVariable("id") Long id) throws ClientException {
		try {
			clientService.deleteClient(this.clientService.findById(id));
			return Utils.success("Client was deleted successfully!");
		} catch (ClientException e) {
			System.out.println(e);
			return Utils.errorBadRequest(e, "Error to delete Client with id "+id);
		}catch(ConstraintViolationException cv) {
			System.out.println(cv);
			return Utils.errorBadRequest(cv, "Client can't be deleted.");
		}
	}
	
	
}
