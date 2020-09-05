import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
private baseUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
  ) { }

  getUser() {
    return this.http.get(`${this.baseUrl}/user/1`);
  }

  getStatus() {
    return this.http.get(`${this.baseUrl}/status`);
  }

  getTasks(userId) {
    return this.http.get(`${this.baseUrl}/ticket?type=1&assignee=${userId}`);
  }

  getBugs(userId) {
    return this.http.get(`${this.baseUrl}/ticket?type=2&assignee=${userId}`);
  }

  changeStatus(statusId, ticketId) {
    return this.http.patch(`${this.baseUrl}/ticket/${ticketId}`, {status : statusId});
  }

  getCompletedTicks(userId) {
    return this.http.get(`${this.baseUrl}/ticket?assignee=${userId}&status=1`);
  }

  getInprogressTicks(userId) {
    return this.http.get(`${this.baseUrl}/ticket?assignee=${userId}&status=2`);
  }

  getNotStartedTicks(userId) {
    return this.http.get(`${this.baseUrl}/ticket?assignee=${userId}&status=3`);
  }
}
