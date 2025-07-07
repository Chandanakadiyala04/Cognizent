package com.cognizant.springlearn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class CountryListMain {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // Get the countryList bean (a list of Country objects)
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        // Print each country
        for (Country country : countryList) {
            System.out.println(country);
        }
    }
}