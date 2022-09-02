import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  todos : Todo[] = [];
  newTodo : string;
  saveTodo(){
    if(this.newTodo){
      let todo =  new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo='';
    }else{
      console.log("please fill the input!!");
      console.log(this.newTodo);
      
    }
  }
  editTodo(index:number){
    this.todos[index].isCompleted=!this.todos[index].isCompleted
  }
  deleteList(i:number){
    this.todos=this.todos.filter((e,index:number)=>index!==i)
  }
}
