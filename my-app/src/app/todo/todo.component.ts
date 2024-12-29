import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo.interfaces';
import { title } from 'process';

@Component({
  selector: 'app-todo',
  standalone: false,

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  //*4 way to bind the data
  //* 1st is interplation {{}}
  //* 2nd is property binding [disable]
  //* 3rd is event binding (click)
  //* 4th is two way binding
  public name: string = 'angular';
  isDisabled = true;
  todos!: Todo[];
  title = '';

  //use this way would not change the data in service
  // todos = new TodoService().todos;

  //in order to change the data, we need to use dependency injection
  constructor(private todoService: TodoService) {
    // this.todos = this.todoService.todos;
    // this.todoService.todo$.subscribe((todos) => {
    //   this.todos = todos;
    // });
    this.todoService.gettodo().subscribe((todos) => {
      this.todos = todos;
    });
  }

  handleClick(id: number) {
    console.log(id);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((ele) => ele.id !== id);
  }
}
