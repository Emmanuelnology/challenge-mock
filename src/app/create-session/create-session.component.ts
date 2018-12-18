import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../services/session-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ISession } from '../services/session-service.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  sessions: Observable<ISession[]>;

  constructor(private sessionService: SessionServiceService) {
    this.sessions= this.sessionService.sessions;
   }

  ngOnInit() {
  }
  onSubmit (sessionForm) {
    this.sessionService.addSession(sessionForm);
  }
}
