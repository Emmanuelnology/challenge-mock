import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { ISession } from '../services/session-service.service';
import { SessionServiceService } from '../services/session-service.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
  }

  onDelete(sessionForm) {
    this.sessionService.delete(sessionForm);
  }
}
