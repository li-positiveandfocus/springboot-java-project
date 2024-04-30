package com.in28minutes.learnspringframework.examples.a1;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
class YourBusinessClass{
	// @Autowird is used for field injection
	/* @Autowired
	Dependency1 dependency1;
	@Autowired
	Dependency2 dependency2;
	*/
	
	/*
	 * injection using setter()
	Dependency1 dependency1;
	Dependency2 dependency2;
	
	@Autowired
	public void setDependency1(Dependency1 dependency1) {
		System.out.println("Setter Injection - setDependency1");
		this.dependency1 = dependency1;
	}

	@Autowired
	public void setDependency2(Dependency2 dependency2) {
		System.out.println("Setter Injection - setDependency2");
		this.dependency2 = dependency2;
	}
	*/
	
	// injection using constructor: Note @Autowired is mandatory for constructor injection <- recommended
	Dependency1 dependency1;
	Dependency2 dependency2;
	
	// @Autowired
	public YourBusinessClass(Dependency1 dependency1, Dependency2 dependency2) {
		super();
		System.out.println("Constructor injection");
		this.dependency1 = dependency1;
		this.dependency2 = dependency2;
	}

	public String toString(){
		return "Using "	+ dependency1 + " and " + dependency2;
	}
	
}
@Component
class Dependency1{
	
}
@Component
class Dependency2{
	
}


@Configuration
// tell spring which package to search for the component, otherwise spring cannot find the compoent with pacmanGame class
@ComponentScan


public class DepInjectionAppLauncherApplication {

	public static void main(String[] args) {

		try (var context = 
				new AnnotationConfigApplicationContext
					(DepInjectionAppLauncherApplication.class)) {
			
			Arrays.stream(context.getBeanDefinitionNames())
			.forEach(System.out::println);
			
			System.out.println(context.getBean(YourBusinessClass.class));
			
		}
		
		
	}
}
