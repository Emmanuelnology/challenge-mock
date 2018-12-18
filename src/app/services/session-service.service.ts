import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface ISession {
  date: string;
  topic: string;
  reflection: string;
  rating: number;
}

export interface ISessionID extends ISession { id: string; }

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  sessions: Observable<ISession[]>;
  sessionCollection: AngularFirestoreCollection<ISession>;
  constructor(afs: AngularFirestore) {
    this.sessionCollection = afs.collection<ISession>('sessions');
    this.sessions= this.sessionCollection.snapshotChanges()
      .pipe(map(this.includeCollectionID));
  }  

  includeCollectionID (docChangeaction) {
    return docChangeaction.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
    });
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

  delete(book: ISessionID) {
    this.sessionCollection.doc(session.id).delete();
  }
}
