import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'src/app/modules/services/message/message.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
message:string;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.recieveMessage().subscribe((d) => {
      this.message = d;
      
    }) 
  }
  deleteMessage(): void{
    this.messageService.deleteMessage();
  }
}
