import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sessions: Observable<any[]>;
  constructor(afs: AngularFirestore) {
    this.sessions = afs.collection('sessions').valueChanges();
  }
  ngOnInit() {
  }

}
