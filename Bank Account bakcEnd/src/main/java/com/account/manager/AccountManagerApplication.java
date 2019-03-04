package com.account.manager;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.account.manager.controller.ClientController;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = "com", basePackageClasses = ClientController.class)
@EnableJpaRepositories("com.account.manager.repository")
public class AccountManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccountManagerApplication.class, args);
	}
}

