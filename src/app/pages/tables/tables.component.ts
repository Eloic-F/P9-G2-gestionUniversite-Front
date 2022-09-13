import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/model/cours';
import { Formation } from 'src/app/model/formation';
import { Personne } from 'src/app/model/personne';
import { Question } from 'src/app/model/question';
import { UE } from 'src/app/model/ue';
import { CoursService } from 'src/app/services/cours.service';
import { FormationService } from 'src/app/services/formation.service';
import { PersonneService } from 'src/app/services/personne.service';
import { QuestionService } from 'src/app/services/question.service';
import { UEService } from 'src/app/services/ue.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  courss!: any[]; 
  cours : Cours = new Cours();
  questions!: any[]; 
  question : Question = new Question();
  personnes!: any[]; 
  personne : Personne = new Personne();
  ues!: any[]; 
  ue : UE = new UE();
  formations!: any[]; 
  formation : Formation = new Formation();
 
  constructor(private coursService:CoursService,private questionService:QuestionService,private personneService:PersonneService, 
    private ueService:UEService, private formationService:FormationService) { }

  ngOnInit(): void {
    this.findAllCours();
    this.findAllQuestion();
    this.findAllPersonne();
    this.findAllUe
    this.findAllFormation
  }
  

  findAllCours(){
    this.coursService.findAll().subscribe((data: any[]) => {this.courss = data;});
  }
  findAllQuestion(){
    this.questionService.findAll().subscribe((data: any[]) => {this.questions = data;});
  }
  findAllPersonne(){
    this.personneService.findAll().subscribe((data: any[]) => {this.personnes = data;});
  }
  findAllUe(){
    this.ueService.findAll().subscribe((data: any[]) => {this.ues = data;});
  }
  findAllFormation(){
    this.formationService.findAll().subscribe((data: any[]) => {this.formations = data;});
  }

  save(){
    this.questionService.save(this.question).subscribe(
      ()=>{
        this.findAllQuestion(); //update list
        this.question = new Question(); //vider formulaire
      }
    )
    
    }

 }
  


