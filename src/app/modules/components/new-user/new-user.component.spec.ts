import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { MockMatDialog } from '../../mock-models/mock-matdialog';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { MockSidenavServiceService } from 'src/app/modules/mock-models/mock-sidenav-service';

import { NewUserComponent } from './new-user.component';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;
  let dialog: MatDialog;
  let sidenavService: SidenavServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule, MatAutocompleteModule ],
      declarations: [ NewUserComponent ],
      providers: [{ provide: MatDialog, useClass: MockMatDialog}, 
        { provide: SidenavServiceService, useClass: MockSidenavServiceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = TestBed.inject(MatDialog);
    sidenavService = TestBed.inject(SidenavServiceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
