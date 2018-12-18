import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { ISession } from '../services/session-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sessions: Observable<ISession[]>;
  sessionCollection: AngularFirestoreCollection<ISession>;
  
  constructor(afs: AngularFirestore) {
    this.sessionCollection = afs.collection<ISession>('sessions');
    this.sessions = this.sessionCollection.valueChanges();
  }
  ngOnInit() {
  }

}
