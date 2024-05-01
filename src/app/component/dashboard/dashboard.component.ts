import { Component, OnInit } from '@angular/core';
import { CrudtodoService } from '../../service/crudtodo.service';
import { Task } from '../../model/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  task: Task = new Task();
  tasks: Task[] = [];

  newTaskText: string = '';

  constructor(private serv: CrudtodoService)
  {

  }

  ngOnInit(): void
  {
    this.task = new Task();
    this.tasks = [];
    this.getAllTodos();
  }

  getAllTodos()
  {
    this.serv.GetAllTasks().subscribe(result =>
    {
      //console.log("GetAllTasks: ", result);
      this.tasks = result;
    }, 
      err=> { console.log("getAllTodos ERR: ", err); });
  }

  addTodo()
  {
    this.task.title = this.newTaskText;
    
    this.serv.AddTask(this.task).subscribe(result =>
    { 
      this.ngOnInit();
      this.newTaskText = '';
    }, 
      err => { console.log("addTodo ERR: ", err); });
  }

  deleteTodo(eTodo: Task)
  {
    //console.log("deleteTodo: ", eTodo);

    this.serv.DeleteTask(eTodo).subscribe(result =>
    {
      this.ngOnInit();
    }, 
      err => { console.log("deleteTodo ERR: ", err); });

  }

}
