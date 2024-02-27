import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { __values } from 'tslib';
import { StateService } from '../../services/state.service';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export default class  HeaderComponent {
  StateService=inject(StateService);
  searchControl = new FormControl("");
  @Output() search=new EventEmitter<string>();
  ngOnInit(){
    this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value) => {
      this.StateService.searchSubject.next(value || "")
    })
  }
}
