import { Component, OnInit , OnDestroy} from '@angular/core';
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

  constructor(private messageService: MessageService) {
    
   }
  ngOnInit(){
    console.log("hi");

    // console.log(this.subscription=this.messageService.receiveMessage().subscribe((message)=>{
    //   console.log(message, "message")
    //   if(message){

    //     this.messages.push(message);
    //     console.log(this.messages, "notification");
    //   }
    //   else{
    //     this.messages=[];
    //     console.log(this.messages, "else-notification");
    //   }
    // }), "receive");

    this.subscription=this.messageService.receiveMessage().subscribe((message)=>{
      console.log(message, "message")
      if(message){
        this.messages.push(message);
        console.log(this.messages, "notification");
      }
      else{
        this.messages=[];
        console.log(this.messages, "else-notification");
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
  