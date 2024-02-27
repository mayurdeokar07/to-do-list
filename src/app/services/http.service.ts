import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient = inject(HttpClient);
  constructor() { }

  addTask(task: string){
    return this.httpClient.post("http://localhost:5000/Task", {
      title:task
    })
  }
  getAllTasks(){
    return this.httpClient.get("http://localhost:5000/Task");
  }

  updatetask(task: any){
    return this.httpClient.put("http://localhost:5000/Task/"+task.id, task)
  }
}
