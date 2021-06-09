import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {MessageService} from 'src/app/modules/services/message/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  constructor( private router: Router, private messageService: MessageService) { }

  ngOnInit(){

  }
    sendMessage(message){
      this.messageService.sendMessage(message);
      console.log(message,"send");
      return false;
    }
}