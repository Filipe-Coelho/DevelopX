package com.account.manager.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.account.manager.model.Client;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {
	
	Client findByIdentifier(Long identifier);

}
