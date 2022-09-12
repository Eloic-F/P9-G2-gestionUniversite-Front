import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { AppService } from 'src/app/services/app.service';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  credentials = {username: '', password:''}
  constructor(private appService:AppService,private httplClient:HttpClient,private router:Router,private personneService:PersonneService) { }
  login(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/mon-profil")});
    var personne:Personne = new Personne();
    this.personneService.findOneByUsername(this.credentials.username).subscribe(data=>{personne=data});
    sessionStorage.setItem("UserId",personne.id.toString());
    sessionStorage.setItem("Username",personne.username.toString())// A afficher l'username dans la page, pour la fonctionnalité.
    return false;
  }

}
