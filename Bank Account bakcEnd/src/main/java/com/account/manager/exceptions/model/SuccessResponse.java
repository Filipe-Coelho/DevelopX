package com.account.manager.exceptions.model;

import java.io.Serializable;

/**
 * @author Filipe
 *
 */
public class SuccessResponse  extends Response implements Serializable{
	private static final long serialVersionUID = -268804628525585531L;
	public SuccessResponse(Integer code, Object message) {
		super();
		setCode(code);
		setMessage(message);
	}
}
