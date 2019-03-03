package com.account.manager.exceptions.model;

import java.io.Serializable;

/**
 * @author Filipe
 *
 */
public class ErrorResponse extends Response implements Serializable{

	private static final long serialVersionUID = -268804628525585531L;
	
	private String errorStackTrace;
	
	public ErrorResponse(String errorStackTrace, Integer codeError, String errorMessage) {
		super();
	    this.errorStackTrace = errorStackTrace;
	    setCode(codeError);
	    setMessage(errorMessage);
	}

	public String getErrorStackTrace() {
		return errorStackTrace;
	}

	public void setErrorStackTrace(String errorStackTrace) {
		this.errorStackTrace = errorStackTrace;
	}

}
