import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Personne } from 'src/app/model/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  credentials = {username:'', password:''}
  constructor(private appService:AppService,private httplClient:HttpClient,private router:Router,private personneService:PersonneService) { }
  personne:Personne=new Personne()
  login(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/mon-profil")});
    var username!:string;
    username=this.credentials.username;
    this.personneService.findOneByUsername(username).subscribe((data:Personne)=>{this.personne=data;sessionStorage.setItem("UserId",this.personne.id.toString())});
    return false;
  }

  authenticated(){
    return  this.appService.authenticated; // false
   }
}
