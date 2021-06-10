import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { MockSidenavServiceService } from 'src/app/modules/mock-models/mock-sidenav-service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let sidenavService: SidenavServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{ provide: SidenavServiceService, useClass: MockSidenavServiceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
