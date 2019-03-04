package com.account.manager.exceptions;

public class NoteException extends Exception {

	private static final long serialVersionUID = 1L;

	public NoteException() {
	}

	public NoteException(String message) {
		super(message);
	}

	public NoteException(Throwable cause) {
		super(cause);
	}

	public NoteException(String message, Throwable cause) {
		super(message, cause);
	}

	public NoteException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
