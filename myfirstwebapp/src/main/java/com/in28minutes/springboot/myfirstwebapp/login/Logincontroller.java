package com.in28minutes.springboot.myfirstwebapp.login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

///login => com.in28minutes.springboot.myfirstwebapp.login.LoginController => login.jsp

@Controller
public class Logincontroller {
	
//	private Logger logger = LoggerFactory.getLogger(getClass());
	
	//http://localhost:8080/login?name=Ranga
	@RequestMapping("login")
	public String gotoLoginPage(@RequestParam String name, ModelMap model) {
		model.put("name", name);
//		logger.debug("Request param is {}", name);
//		System.out.println("Request param is "+name);
		return "login";
	}
}