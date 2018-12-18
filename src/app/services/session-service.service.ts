import { Injectable } from '@angular/core';

export interface ISession {
  user;
  date: string;
  topic: string;
  reflection: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor() { }
}
