import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidenavServiceService } from 'src/app/modules/services/sidenav/sidenav-service.service';
import { CitiesService } from 'src/app/modules/services/cities/cities.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/modules/components/user-dialog/user-dialog.component';
import { User } from '../main/models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  loginForm: FormGroup;
  user: any;
  isEditMode: boolean = true;
  addUser: any;
  citiesArr: string[];

  constructor(private fb:FormBuilder, private router: Router, private sidenav: SidenavServiceService, private cities: CitiesService, private dialog: MatDialog) {
    const user = this.router.getCurrentNavigation().extras.state.userData;
    const add=this.router.getCurrentNavigation().extras.state.addUser;
    this.user = user;
    this.addUser=add;
   }

  ngOnInit(): void {
    this.sidenav.open();
    this.citiesArr = this.cities.cities;
    
    if(this.isEditMode){
      this.loginForm = this.fb.group({
        id: [this.user.id, Validators.required],
        name: [this.user.name, Validators.required],
        username: [this.user.username, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        street: [this.user.address.street, Validators.required],
        suite: this.user.address.suite,
        city: [this.user.address.city,Validators.required],
        zipcode: [this.user.address.zipcode, Validators.required],
        lat: this.user.address.geo.lat,
        lng: this.user.address.geo.lng,
        phone: [this.user.phone,Validators.required],
        website: this.user.website,
        companyName: [this.user.company.name, Validators.required],
        catchPhrase: this.user.company.catchPhrase,
        bs: this.user.company.bs,
      });
    }
    
     else{
      this.loginForm = this.fb.group({
        id: ['',Validators.required],
        name: ['',Validators.required],
        username:['',Validators.required],
        email: ['',[Validators.required, Validators.email]],
        phone: ['',Validators.required],
        street:['',Validators.required],
        city: ['',Validators.required],
        zipcode: ['',Validators.required],
        lat: '',
        lng: '',
        website: '',
        companyName: ['',Validators.required],
        catchPhrase: '',
        bs: '',   
      });
    }
  }

  saveUser() {
    const user : User = {
        id: this.loginForm.get('id').value,
        name: this.loginForm.get('name').value,
        username:this.loginForm.get('username').value,
        email: this.loginForm.get('email').value,
        phone: this.loginForm.get('phone').value,
        address: {
          street: this.loginForm.get('street').value,
          suite: this.loginForm.get('suite').value,
          city: this.loginForm.get('city').value,
          zipcode: this.loginForm.get('zipcode').value,
          geo: {
            lat: this.loginForm.get('lat').value,
            lng: this.loginForm.get('lng').value,
          }
        },
        website: this.loginForm.get('website').value,
        company: {
          name: this.loginForm.get('companyName').value,
          catchPhrase: this.loginForm.get('catchPhrase').value,
          bs: this.loginForm.get('bs').value, 
        },
    };
    
    this.dialog.open(UserDialogComponent, { data: user });
  }
 

}