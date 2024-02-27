import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import PageTitleComponent from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';
@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, PageTitleComponent, TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss',

})
export class AllTaskComponent {
  

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
  addTask(){
    this.HttpService.addTask(this.newTask).subscribe(() => {
      this.newTask="";
      this.getAllTasks();
    })
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
    
  };

  onImportant(task: any){
    task.important=true;
    console.log("Important", task)
    this.HttpService.updatetask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }



}
