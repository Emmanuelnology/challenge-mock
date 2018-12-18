import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface ISession {
  date: string;
  topic: string;
  reflection: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  sessions: Observable<ISession[]>;
  sessionCollection: AngularFirestoreCollection<ISession>;
  constructor(afs: AngularFirestore) {
    this.sessionCollection = afs.collection<ISession>('sessions');
  }

  addSession (courses) {
    const session: ISession = {
      topic: courses.theSession,
      date: courses.date,
      reflection: courses.reflection,
      rating: courses.rating
    };
    this.sessionCollection.add(session);
  }

  remove(courses: ISession) {
    this.sessionCollection.delete(courses);
  }
}
