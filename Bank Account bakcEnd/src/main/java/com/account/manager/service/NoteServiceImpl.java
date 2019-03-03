package com.account.manager.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.account.manager.enums.NoteEnum;
import com.account.manager.exceptions.InvalidArgumentException;
import com.account.manager.exceptions.NoteException;
import com.account.manager.exceptions.NoteUnavaliableException;
import com.account.manager.model.Client;
import com.account.manager.model.History;
import com.account.manager.model.Note;
import com.account.manager.repository.HistoryRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author Filipe
 *
 */
@Component
@Qualifier("NoteServiceImpl")
public class NoteServiceImpl implements NoteService {
	
	private static final long serialVersionUID = -537273961959420406L;

	@Autowired
	private HistoryRepository historyRepository;
	
	@Override
	public List<Note> withdraw(Long amount, Client client) throws NoteException, JsonProcessingException {
		
		if(isNegativeAmount((amount))) {
			throw new InvalidArgumentException("Cannot withdraw negative amount!");
		}

		List<Note> notesToWithdraw = getNotesToWithdraw(amount);
		
		historyRepository.save(
				new History()
				.setClient(client)
				.setNotes(new ObjectMapper().writeValueAsString(notesToWithdraw))
				.setWithdrawAmount(amount)
				.setWithdrawDate(new Date()));
		
		return notesToWithdraw;
	}
	
	private boolean isNegativeAmount(Long amount) {
		return amount<0;
	}

	/**
	 * @param amount
	 * @return
	 * @throws NoteException 
	 */
	private List<Note> getNotesToWithdraw(Long amount) throws NoteException{
		try {
			HashMap<NoteEnum, Integer> mapNotesToWithdraw = new HashMap<NoteEnum, Integer>();
			
			List<Note> listNote =  new ArrayList<Note>();

			
			while (amount >= NoteEnum.HUNDRED_DOLLARS.getAmount()){
				amount = amount - NoteEnum.HUNDRED_DOLLARS.getAmount();
				
				if(mapNotesToWithdraw.containsKey(NoteEnum.HUNDRED_DOLLARS)) {
					mapNotesToWithdraw.put(NoteEnum.HUNDRED_DOLLARS, ( mapNotesToWithdraw.get(NoteEnum.HUNDRED_DOLLARS).intValue() + 1));
				}else {
					mapNotesToWithdraw.put(NoteEnum.HUNDRED_DOLLARS, 1);
				}
				
			}
			
			while (amount >= NoteEnum.FIFTY_DOLLARS.getAmount()){
				amount = amount - NoteEnum.FIFTY_DOLLARS.getAmount();
				
				if(mapNotesToWithdraw.containsKey(NoteEnum.FIFTY_DOLLARS)) {
					mapNotesToWithdraw.put(NoteEnum.FIFTY_DOLLARS, ( mapNotesToWithdraw.get(NoteEnum.FIFTY_DOLLARS).intValue() + 1));
				}else {
					mapNotesToWithdraw.put(NoteEnum.FIFTY_DOLLARS, 1);
				}
			}
			
			while (amount >= NoteEnum.TWENTY_DOLLARS.getAmount()){
				amount = amount - NoteEnum.TWENTY_DOLLARS.getAmount();
				
				if(mapNotesToWithdraw.containsKey(NoteEnum.TWENTY_DOLLARS)) {
					mapNotesToWithdraw.put(NoteEnum.TWENTY_DOLLARS, ( mapNotesToWithdraw.get(NoteEnum.TWENTY_DOLLARS).intValue() + 1));
				}else {
					mapNotesToWithdraw.put(NoteEnum.TWENTY_DOLLARS, 1);
				}
			}
			
			while (amount >= NoteEnum.TEN_DOLLARS.getAmount()){
				amount = amount - NoteEnum.TEN_DOLLARS.getAmount();
				
				if(mapNotesToWithdraw.containsKey(NoteEnum.TEN_DOLLARS)) {
					mapNotesToWithdraw.put(NoteEnum.TEN_DOLLARS, ( mapNotesToWithdraw.get(NoteEnum.TEN_DOLLARS).intValue() + 1));
				}else {
					mapNotesToWithdraw.put(NoteEnum.TEN_DOLLARS, 1);
				}
			}
			
			
			for (Entry<NoteEnum, Integer> map : mapNotesToWithdraw.entrySet()) {
				listNote.add(new Note(map.getKey().getName(), map.getValue()));
			}
			
			if(isAmountRest(amount)) {
				throw new NoteUnavaliableException("Notes insuficient or Note does not exist, please try another value.");
			}
			return listNote;
		} catch (Exception e) {
			e.printStackTrace();
			throw new NoteException(e);
		}
	}

	private boolean isAmountRest(Long amount) {
		return amount>0;
	}
	
	
}

