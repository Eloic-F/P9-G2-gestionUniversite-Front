import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { PersonneService } from 'src/app/services/personne.service';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userId= sessionStorage.getItem("UserId");
  public focus;
  public listTitles: any[];
  public location: Location;

  personne:Personne=new Personne();
  constructor(location: Location,  private element: ElementRef, private router: Router,
    private appService:AppService,private personneService:PersonneService) {

    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.findById(this.userId);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  authenticated(){
    return  this.appService.authenticated; // false
   }
   //
   authorities(){
     if(this.appService.isAdmin == true){
       return false;
     }else{
       return true;
     }
   }
   findById(username:string  ){
    this.personneService.findOne(Number(this.userId)).subscribe((data:Personne)=>{this.personne=data;console.log(this.personne.id)})
  }

}
