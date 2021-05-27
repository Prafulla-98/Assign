import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CitiesService } from 'src/app/modules/services/cities/cities.service';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { UserDialogComponent } from 'src/app/modules/components/user-dialog/user-dialog.component';
import { User } from '../main/models/User';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  citiesArr: string[];

  constructor(private fb:FormBuilder, private router: Router, private sidenav: SidenavServiceService, private cities: CitiesService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sidenav.open();
    this.citiesArr = this.cities.cities;
    this.userForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
        addresses: this.fb.array([
            this.initAddress(),
        ])
    });
  }

  initAddress() {
          // initialize our address
          return this.fb.group({
            doorNo: ['', Validators.required],
            street: ['', Validators.required],
            area: ['', Validators.required],
            city: ['', Validators.required],
            pin: ['', Validators.required],
          });
      }

  addAddress() {
      // add address to the list
      const control = <FormArray>this.userForm.controls['addresses'];
      control.push(this.initAddress());
  }

  saveUser() {
    const user : User = {
      id: '',
      name: this.userForm.get('name').value,
      username: '',
      email: this.userForm.get('email').value,
      phone: this.userForm.get('phone').value,
      address: {
        street: this.userForm.get('addresses')['controls'][0].value.street,
        suite: this.userForm.get('addresses')['controls'][0].value.area,
        city: this.userForm.get('addresses')['controls'][0].value.city,
        zipcode: this.userForm.get('addresses')['controls'][0].value.pin,
        geo: {
          lat: '',
          lng: '',
        }
      },
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '', 
      },
    };
  
    const values = this.userForm.value;
    let missingFields = false;

    if (values.name == "" || values.phone == "" || values.email == "") {
      missingFields = true;
    }

    for (const address of values.addresses) {
      if (address.doorNo == "" || address.street == "" || address.city == "" || address.area == "" || address.pin == "") {
        missingFields = true;
      }
    }

    if (!missingFields) {
      this.dialog.open(UserDialogComponent, { data: user });
    }
  }

}
