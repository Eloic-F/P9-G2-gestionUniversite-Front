import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  credentials = {username: '', password:''}
  constructor(private appService:AppService,private httplClient:HttpClient,private router:Router) { }
  login(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/contacts")});
    return false;
  }

}
