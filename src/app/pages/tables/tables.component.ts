import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/model/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  courss!: any[]; 
  cours : Cours = new Cours();
 
  constructor(private coursService:CoursService,) { }

  ngOnInit(): void {
    this.findAllCours();
   
  }
  

  findAllCours(){
    this.coursService.findAll().subscribe((data: any[]) => {this.courss = data;});
  }

}
