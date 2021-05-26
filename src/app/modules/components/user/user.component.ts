import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { User } from '../main/models/User';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() public edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editData() {
    this.edit.emit(this.user);
  }

}
