package com.in28minutes.springboot.myfirstwebapp.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class TodoService {
	
	private static List<Todo> todos = new ArrayList();
	
	private static int todosCount = 0;
	static {
		todos.add(new Todo(++todosCount, "in28minuts", "Learn AWS now!!!", LocalDate.now().plusYears(1), false));
		todos.add(new Todo(++todosCount, "in28minuts", "Learn DevOps!!!", LocalDate.now().plusYears(2), false));
		todos.add(new Todo(++todosCount, "in28minuts", "Learn full Stack", LocalDate.now().plusYears(3), false));
		
	}
	
	public List<Todo> findByUsername(String username){
		Predicate<? super Todo> predicate = todo -> todo.getName().equalsIgnoreCase(username);
		return todos.stream().filter(predicate).toList();
	}
	
	public void addtodo(String username, String description, LocalDate targetDate, boolean done) {
		Todo todo = new Todo(++todosCount, username, description, targetDate, done);
		todos.add(todo);
		
	}
	
	public void deleteById(int id) {
		// todo.getId()==id
		// todo-> todo.getId() == id
		Predicate<? super Todo> predicate = todo -> todo.getId() == id; //define the condition
		todos.removeIf(predicate);
	}

	public Todo findById(int id) {
		// TODO Auto-generated method stub
		Predicate<? super Todo> predicate = todo -> todo.getId() == id; // define the condition
		Todo todo = todos.stream().filter(predicate).findFirst().get(); // action when meet the condition
		return todo;
	}

	public void updateTodo(@Valid Todo todo) {
		// TODO Auto-generated method stub
		deleteById(todo.getId());
		todos.add(todo);
	}

}
