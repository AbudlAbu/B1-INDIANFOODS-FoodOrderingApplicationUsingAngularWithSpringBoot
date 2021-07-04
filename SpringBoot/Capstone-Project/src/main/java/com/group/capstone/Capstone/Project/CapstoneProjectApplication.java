package com.group.capstone.Capstone.Project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.group.capstone.Capstone.Project.dao.AddressRepository;
import com.group.capstone.Capstone.Project.dao.CustomerRepository;
import com.group.capstone.Capstone.Project.dao.OrderRepository;
import com.group.capstone.Capstone.Project.entity.Address;
import com.group.capstone.Capstone.Project.entity.Customer;
import com.group.capstone.Capstone.Project.entity.Order;
import com.group.capstone.Capstone.Project.service.CheckoutService;
import com.group.capstone.Capstone.Project.service.CheckoutServiceImpl;

//@SpringBootApplication
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@SpringBootApplication
@EnableTransactionManagement
public class CapstoneProjectApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(CapstoneProjectApplication.class, args);
	}
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(CapstoneProjectApplication.class);
    }

}
