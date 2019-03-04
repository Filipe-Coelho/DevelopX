package com.account.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.account.manager.exceptions.ClientException;
import com.account.manager.exceptions.HistoryException;
import com.account.manager.exceptions.NoteException;
import com.account.manager.exceptions.model.ResponseInterface;
import com.account.manager.service.HistoryService;
import com.account.manager.utils.Utils;

@RestController
@CrossOrigin(origins="*")
public class HistoryController {
	
	@Autowired
	@Qualifier(value="HistoryServiceImpl")
	private HistoryService historyService; 
	
	

	/**
	 * @param id
	 * @return
	 * @throws ClientException 
	 */
	@ResponseBody
	@RequestMapping(value = "/history", method= RequestMethod.GET)
	public ResponseEntity<ResponseInterface> history() throws NoteException {
		try {
			return Utils.success(this.historyService.findAll());
		} catch (Exception e) {
			System.out.println(e);
			return Utils.errorBadRequest(e, "Error to Withdraw money!");
			
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "/deleteHistory/{id}", method= RequestMethod.GET)
	public ResponseEntity<ResponseInterface> deleteHistory(@PathVariable("id") Long id) throws HistoryException {
		try {
			historyService.delete(this.historyService.findById(id));
			return Utils.success("Client was deleted successfully!");
		} catch (HistoryException e) {
			System.out.println(e);
			return Utils.errorBadRequest(e, "Error to delete history with id "+id);
		}
	}
	
	
	
	
	
}
