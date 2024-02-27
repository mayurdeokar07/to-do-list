import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
  providers: [DatePipe]
})
export default class PageTitleComponent {
  today = this.datePipe.transform(new Date(), 'fullDate');

  constructor(private datePipe: DatePipe) {} // Inject DatePipe

}
