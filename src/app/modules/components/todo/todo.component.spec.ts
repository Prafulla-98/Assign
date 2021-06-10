import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { MockSidenavServiceService } from 'src/app/modules/mock-models/mock-sidenav-service';

import { TodoComponent } from './todo.component';
import { HttpClient } from '@angular/common/http';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let sidenavService: SidenavServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ TodoComponent ],
      providers: [{ provide: SidenavServiceService, useClass: MockSidenavServiceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
