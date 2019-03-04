package com.account.manager.exceptions;

public class NoteUnavaliableException extends NoteException {

	private static final long serialVersionUID = 1L;

	public NoteUnavaliableException() {
	}

	public NoteUnavaliableException(String message) {
		super(message);
	}

	public NoteUnavaliableException(Throwable cause) {
		super(cause);
	}

	public NoteUnavaliableException(String message, Throwable cause) {
		super(message, cause);
	}

	public NoteUnavaliableException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
