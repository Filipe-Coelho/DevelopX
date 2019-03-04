package com.account.manager.exceptions.model;

/**
 * @author Filipe
 *
 */
public abstract class Response implements ResponseInterface {
	
	private static final long serialVersionUID = -6813929713072724911L;

	private Integer code;
	private Object message;
	
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public Object getMessage() {
		return message;
	}
	public void setMessage(Object message) {
		this.message = message;
	}

}
