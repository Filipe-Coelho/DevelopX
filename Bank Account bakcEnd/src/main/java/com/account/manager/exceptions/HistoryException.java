package com.account.manager.exceptions;

public class HistoryException extends Exception {

	private static final long serialVersionUID = 1L;

	public HistoryException() {
	}

	public HistoryException(String message) {
		super(message);
	}

	public HistoryException(Throwable cause) {
		super(cause);
	}

	public HistoryException(String message, Throwable cause) {
		super(message, cause);
	}

	public HistoryException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
