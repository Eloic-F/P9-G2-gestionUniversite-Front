import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private appService:AppService) { }
  ngOnInit(): void {
  }
  
  authenticated(){
    return  this.appService.authenticated; // false
   }
}
