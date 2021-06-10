import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { MockSidenavServiceService } from 'src/app/modules/mock-models/mock-sidenav-service';

import { PostComponent } from './post.component';
import { Router } from '@angular/router';
import { MockRouter } from 'src/app/modules/mock-models/mock-router';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let sidenavService: SidenavServiceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ PostComponent ],
      providers: [{ provide: SidenavServiceService, useClass: MockSidenavServiceService},
      { provide: Router, useClass: MockRouter},]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavServiceService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
