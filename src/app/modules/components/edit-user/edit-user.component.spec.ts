import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';

import { EditUserComponent } from './edit-user.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MockMatDialog } from '../../mock-models/mock-matdialog';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { MockSidenavServiceService } from 'src/app/modules/mock-models/mock-sidenav-service';
import { MockUser } from '../../mock-models/mock-user';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let dialog: MatDialog;
  let sidenavService: SidenavServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, MatAutocompleteModule],
      declarations: [ EditUserComponent ],
      providers: [{ provide: MatDialog, useClass: MockMatDialog}, 
        { provide: SidenavServiceService, useClass: MockSidenavServiceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    sidenavService = TestBed.inject(SidenavServiceService);
    component.user = MockUser.user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
