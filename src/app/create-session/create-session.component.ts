import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../services/session-service.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
  }

  addSession(sessionInput: HTMLFormElement) {

  }

}
