package com.in28minutes.learnspringframework.examples.a0;

import java.util.Arrays;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
// tell spring which package to search for the component, otherwise spring cannot find the compoent with pacmanGame class
@ComponentScan


public class SimpleSpringContextLauncherApplication {

	public static void main(String[] args) {

		try (var context = 
				new AnnotationConfigApplicationContext
					(SimpleSpringContextLauncherApplication.class)) {
			
			Arrays.stream(context.getBeanDefinitionNames())
			.forEach(System.out::println);
		}
	}
}
