import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { MockSidenavServiceService } from 'src/app/modules/mock-models/mock-sidenav-service';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let sidenavService: SidenavServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ MainComponent ],
      providers: [{ provide: SidenavServiceService, useClass: MockSidenavServiceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    sidenavService = TestBed.inject(SidenavServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
