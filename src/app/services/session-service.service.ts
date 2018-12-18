import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface ISession {
  id?: string;
  userId: string;
  date: string;
  topic: string;
  reflection: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  sessions: Observable<any[]>;
  constructor(afs: AngularFirestore) {
    this.sessions = afs.collection('sessions').valueChanges();
  }
}
