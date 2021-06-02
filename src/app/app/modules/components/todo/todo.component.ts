import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './models/todo';
import { TodoService } from 'src/app/modules/services/todo/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  todo$: Observable<Todo[]>;
  todo: Todo[];
  displayedColumns:string[] = ['Id', 'UserID', 'Title', 'Status'];
  dataSource;
  page: number = 1;
  constructor(private service: TodoService,private http: HttpClient, private router: Router, private sidenav: SidenavServiceService) { }

  ngOnInit(): void {
    this.sidenav.open();
    this.todo$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todo');
    this.todo$.subscribe(t => {
      this.todo = t as Todo[];
    });
    this.dataSource = new MatTableDataSource<Todo>(this.todo);
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
