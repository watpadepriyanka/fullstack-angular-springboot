import { CommonModule , DatePipe} from '@angular/common';
import { Component  } from '@angular/core';


export class Todo{
   constructor(
    public id : number,
    public description: string,
    public done : boolean,
    public targetdate : Date
  ){}
}

@Component({
  selector: 'app-list-todo',
  imports: [CommonModule, DatePipe],
  templateUrl: './list-todo.html',
  styleUrl: './list-todo.css',
})



export class ListTodo {

     
       todos= [
        new Todo(1, 'Check Email',false,new Date()),
        new Todo(2, 'Complete Angular Project',false,new Date()),
        new Todo(3, 'Apply Jobs',false,new Date()),
        new Todo(4, 'Learn System design',false,new Date()),
        new Todo(5, 'Completed AI Project',false,new Date())

       ]   

       
}
