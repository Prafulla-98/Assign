import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'src/app/modules/services/message/message.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) { }
  ngOnInit(): void{
    this.subscription=this.messageService.receiveMessage().subscribe((message)=>{
      if(message){
        this.messages.push(message);
      }
      else{
        this.messages=[];
      }
    });  
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
  clearMessage(): void{
    this.messageService.clearMessage();
  }
}
  