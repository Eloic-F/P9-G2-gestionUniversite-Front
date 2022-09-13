import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/model/cours';
import { Question } from 'src/app/model/question';
import { AppService } from 'src/app/services/app.service';
import { CoursService } from 'src/app/services/cours.service';
import { QuestionService } from 'src/app/services/question.service';

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
 
  constructor(private coursService:CoursService,private questionService:QuestionService,
    private appService:AppService) { }

  ngOnInit(): void {
    let userId=sessionStorage.getItem('UserId');
    let name=sessionStorage.getItem("Username");
    if(!userId){
      alert("ErreurID")
      return;
    }
    
    this.findAllCours();
    this.findAllQuestion();
   
  }
  

  findAllCours(){
    this.coursService.findAll().subscribe((data: any[]) => {this.courss = data;});
  }
  findAllQuestion(){
    this.questionService.findAll().subscribe((data: any[]) => {this.questions = data;});
  }

  save(){
    this.questionService.save(this.question).subscribe(
      ()=>{
        this.findAllQuestion(); //update list
        this.question = new Question(); //vider formulaire
      }
    )
    
    }

    //
  authorities(){
    if(this.appService.isAdmin == true || this.appService.isEtudiant ==true){
      return false;
    }else{
      return true;
    }
  }

 }
  


