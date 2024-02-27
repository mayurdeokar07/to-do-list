import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export  class TaskListComponent {
@Input() taskList:any[]=[];
@Output() important=new EventEmitter<any>();
markImportant(task: any){
  this.important.emit(task);
};
@Output() completed=new EventEmitter<any>();
markCompleted(task: any){
  this.completed.emit(task);
};
}
