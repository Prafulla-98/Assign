import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
private subject = new Subject<string>();
  constructor() { }

  sendMessage(message: string){
    this.subject.next(message);
  }
  recieveMessage(): Observable<string> {
    return this.subject.asObservable();
  }

  deleteMessage() {
    this.subject.next();
}
}
