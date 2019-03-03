package com.account.manager.enums;

/**
 * @author Filipe
 *
 */
public enum NoteEnum {
	
	TEN_DOLLARS(10l, "Ten dollars"), TWENTY_DOLLARS(20l, "Twenty dollars"), FIFTY_DOLLARS(50l,  "Fifty dollars"), HUNDRED_DOLLARS(100l,  "Hundred dollars");
	
	private Long amount;
	private String name;

	NoteEnum(Long amount, String name) {
		this.amount = amount;
		this.name = name;
	}
	
	
	
	public String getName() {
		return name;
	}



	public Long getAmount() {
		return amount;
	}
	
	/**
	 * @param amount
	 * @return
	 */
	public static boolean isAmountSelectedValid(Long amount) {
		for (NoteEnum noteEnum : NoteEnum.values()) {
			if(noteEnum.getAmount().equals(amount)) {
				return true;
			}
		}
		return false;
	}
	
}
