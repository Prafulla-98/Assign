import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'src/app/modules/services/message/message.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  messages: string[];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.recieveMessage();
  }

  deleteMessage(index): void{
    this.messageService.deleteMessage(index);
  }
}