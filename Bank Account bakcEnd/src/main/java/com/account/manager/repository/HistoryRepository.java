package com.account.manager.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.account.manager.model.History;

@Repository
public interface HistoryRepository extends CrudRepository<History, Long> {

}
