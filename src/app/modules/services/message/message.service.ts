import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[];
  constructor() {
    this.messages = [];
   }

  sendMessage(message: string) {
    this.messages.push(message);
  }
  recieveMessage(): string[] {
    return this.messages;
  }

  deleteMessage(index) {
    this.messages.splice(index, 1);
  }
}