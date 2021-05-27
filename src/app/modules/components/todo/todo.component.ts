import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from 'src/app/modules/services/todo/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ELEMENT_DATA: Todo[];
  displayedColumns:string[] = ['Id', 'UserID', 'Title', 'Status'];
  dataSource;
  page: number = 1;
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Todo>(this.ELEMENT_DATA);
    this.getAllTodo();
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
  }

  public getAllTodo(){
    let resp=this.service.getTodoList();
    resp.subscribe(todo=>this.dataSource.data=todo as Todo[]);
  }

}
