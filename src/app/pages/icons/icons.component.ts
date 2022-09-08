import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Examen } from 'src/app/model/examen';
import { Personne } from 'src/app/model/personne';
import { Question } from 'src/app/model/question';
import { CoursService } from 'src/app/services/cours.service';
import { ExamenService } from 'src/app/services/examen.service';
import { PersonneService } from 'src/app/services/personne.service';
import { QuestionService } from 'src/app/services/question.service';

export interface IHash{
  [details: string] : string;
}

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  utilisateur:Personne=new Personne;
  cours!:any[];
  questions!:any[];
  examens!:any[];
  question:IHash={};
  examen:Examen=new Examen;
  selectedFile:FileList;
  public copy: string;
  constructor(private coursService:CoursService,private examenService:ExamenService,private questionService:QuestionService,private personneService:PersonneService) { }

  ngOnInit(): void {
    
  }
  OnInit(id:number) {
    this.ActualUser(id);
    this.findAllCours(id);
    this.findAllExamen(id);
    this.findAllQuestion(id);

  }
  ActualUser(id:number){
    this.personneService.findOne(id).subscribe((data:any) =>{this.utilisateur=data})

  }
  findAllQuestion(id:number){
    this.personneService.findAllQuestions(id).subscribe((data:any[]) => {this.questions=data;})
  }

  findAllExamen(id:number){
    this.personneService.findAllExamens(id).subscribe((data:any[]) =>{this.examens=data})
  }

  findAllCours(id:number){
    this.personneService.findAllCours(id).subscribe((data:any[]) =>{this.cours=data})
  }
  selectFile(event:any){
    this.selectedFile = event.target.files;
  }
  reponse(){

  }

  correction(){

  }
  depot(){

  }


  
}
