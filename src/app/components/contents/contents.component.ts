import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDataService } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  @Input('tickets') tickets;
  @Output() statusChange = new EventEmitter();

  progressStatus = new FormControl('');
  allStatus: any;
  constructor(
    private taskDataService: TaskDataService
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus = () => {
    this.taskDataService.getStatus().subscribe(data => {
      console.log('Data : - ', data);
      this.allStatus = data;
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  changeStatus = (statusId, ticketId) => {
    this.taskDataService.changeStatus(statusId, ticketId).subscribe(data => {
      // this.allStatus = data;
      this.statusChange.emit(statusId);
    }, error => {
      console.log('changeStatus Error:- ', error);
    });
  }
}
