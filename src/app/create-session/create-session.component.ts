import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../services/session-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
  }
  onSubmit (sessionForm) {
  }
}
