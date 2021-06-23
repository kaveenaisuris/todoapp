import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  nextId = 4;
  todos = [
    {
      id: 1,
      label: 'Bring Milk',
      done: false
    },
    {
      id: 2,
      label: 'Pay mobile bill',
      done: false
    },
    {
      id: 3,
      label: 'Bring Milk',
      done: true
    },
  ];

  delete(todo: { id: number; }) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodoLabel: any) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  Update(todo: { done: boolean; }) {
    todo.done = !todo.done;
  }
}
