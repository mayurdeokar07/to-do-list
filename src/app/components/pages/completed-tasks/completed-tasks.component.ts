import { Component, Inject, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import PageTitleComponent from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';


@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.scss',
 
})
export  class CompletedTasksComponent {
  newTask="";
  initialTaskList: any[]=[]
  taskList: any[]=[];
  HttpService=inject(HttpService);
  StateService=inject(StateService);
  ngOnInit(){
    this.StateService.searchSubject.subscribe((value)=>{
      if(value){
        this.taskList=this.initialTaskList.filter(x=>x.title.toLowerCase().includes(value.toLowerCase()))
      }else{
        this.taskList= this.initialTaskList;
      }
    })
    this.getAllTasks();
  }
 
  getAllTasks(){
    this.HttpService.getAllTasks().subscribe((result:any)=>{
      this.initialTaskList= this.taskList = result;
    })
  }

  onCompleted(task: any){
    task.completed = true;
    console.log("Completed", task)
    this.HttpService.updatetask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }}
