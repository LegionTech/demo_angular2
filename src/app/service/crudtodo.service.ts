import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { Task } from '../model/task'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudtodoService {

  serviceUrl : string;

  constructor(private http: HttpClient)
  {
    this.serviceUrl = "https://localhost:44344/todo";
  }

  AddTask0(task: Task): Observable<Task>
  {
    return this.http.post<Task>(this.serviceUrl, task);
  }

  AddTask(task: Task): Observable<Task[]>
  {
    console.log("AddTask: ", task);
    return this.http.put<Task[]>(this.serviceUrl, task);
  }

  GetAllTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.serviceUrl);
  }

  DeleteTask(task: Task): Observable<Task>
  {
    return this.http.delete<Task>(this.serviceUrl + '/' + task.id);
  }
}
