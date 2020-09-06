import { TaskDataService } from './../../services/task-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: Object;
  taskCount = 0;
  bugsCount = 0;
  completedCount = 0;
  inProgressCount = 0;
  notStartedCount = 0;
  tasks: Object;
  bugs: Object;
  completeds: Object;
  inprogress: Object;
  notStarted: Object;
  constructor(
    private taskDataService: TaskDataService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser = () => {
    this.taskDataService.getUser().subscribe(data => {
      this.user =  data;
      this.getTasks(data['id']);
      this.getBugs(data['id']);
      this.getCompletedTicks(data['id']);
      this.getInprogressTicks(data['id']);
      this.getNotStartedTicks(data['id']);
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  getTasks = (userId) => {
    this.taskDataService.getTasks(userId).subscribe(tasks => {
      this.tasks = tasks;
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  getBugs = (userId) => {
    this.taskDataService.getBugs(userId).subscribe(tasks => {
      this.bugs = tasks;
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  getCompletedTicks = (userId) => {
    this.taskDataService.getCompletedTicks(userId).subscribe(completeds => {
      this.completeds = completeds;
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  getInprogressTicks = (userId) => {
    this.taskDataService.getInprogressTicks(userId).subscribe(inprogress => {
      this.inprogress = inprogress;
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  getNotStartedTicks = (userId) => {
    this.taskDataService.getNotStartedTicks(userId).subscribe(notStarted => {
      this.notStarted = notStarted;
    }, error => {
      console.log('getStatus Error:- ', error);
    });
  }

  getTickets = (selectedTab) => {
    console.log(selectedTab);
  }
}
