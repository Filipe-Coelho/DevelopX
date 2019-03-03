package com.account.manager.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.account.manager.exceptions.ClientException;
import com.account.manager.exceptions.model.ErrorResponse;
import com.account.manager.exceptions.model.ResponseInterface;
import com.account.manager.exceptions.model.SuccessResponse;

/**
 * @author Filipe
 *
 */
public class Utils {
	
	@ExceptionHandler({ClientException.class})
	public static ResponseEntity<ResponseInterface> notFound(Exception ex, String message){
	    return new ResponseEntity<ResponseInterface>(
	        new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value(), message) , HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler({ClientException.class})
	public static ResponseEntity<ResponseInterface> errorBadRequest(Exception ex, String message){
	    return new ResponseEntity<ResponseInterface>(
	        new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value(), message), HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler({ClientException.class})
	public static ResponseEntity<ResponseInterface> success(Object message){
		return new ResponseEntity<ResponseInterface>(
	        new SuccessResponse(HttpStatus.OK.value(), message) , HttpStatus.OK);
	}
	
}
