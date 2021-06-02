  
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public subject = new Subject<any>();
  
  constructor() { }

  sendMessage(message: string){
    this.subject.next({text : message});
  }

  receiveMessage(): Observable<any>{
    return this.subject.asObservable(); 
  }

  clearMessage() {
    this.subject.next();
}

}