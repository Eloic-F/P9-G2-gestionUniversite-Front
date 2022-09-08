import { Component, OnInit } from '@angular/core';
import { Examen } from 'src/app/model/examen';
import { Question } from 'src/app/model/question';
import { CoursService } from 'src/app/services/cours.service';
import { ExamenService } from 'src/app/services/examen.service';
import { PersonneService } from 'src/app/services/personne.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  cours!:any[];
  questions!:any[];
  examens!:any[];
  question:Question=new Question;
  examen:Examen=new Examen;
  public copy: string;
  constructor(private coursService:CoursService,private examenService:ExamenService,private questionService:QuestionService,private personneService:PersonneService) { }

  ngOnInit() {
  }


}
