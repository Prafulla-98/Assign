import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { SidenavServiceService } from './sidenav-service.service';

describe('SidenavServiceService', () => {
  let service: SidenavServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SidenavServiceService
      ]
    });
    service = TestBed.inject(SidenavServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
