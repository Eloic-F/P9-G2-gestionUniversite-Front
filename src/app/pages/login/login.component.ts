import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluation } from 'src/app/model/evaluation';
import { Personne } from 'src/app/model/personne';
import { Question } from 'src/app/model/question';
import { AppService } from 'src/app/services/app.service';
import { CoursService } from 'src/app/services/cours.service';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { PersonneService } from 'src/app/services/personne.service';
import { QuestionService } from 'src/app/services/question.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password:''}
  users!: any[];
  roles!: any[];
  questions!: any[];
  evaluations!: any[];
  courses!: any[];

  question: Question = new Question();
  evaluation: Evaluation = new Evaluation();
  constructor(private personneService: PersonneService, private questionService: QuestionService,
    private evaluationService: EvaluationService,private roleService:RoleService,
    private coursService:CoursService,private appService:AppService,private router:Router) {}

  ngOnInit() {
    let userId=sessionStorage.getItem('UserId');
    let name=sessionStorage.getItem("Username");
    if(!userId){
      alert("ErreurID")
      return;
    }
    this.findAllPersonne();
    this.findAllQuestions();
    this.findAllEvaluations();
    this.findAllCours();
  }

  // Personne : enseignant
  public findAllPersonne() {
    this.personneService.findAll().subscribe((data) => {
      this.users = data;
    });
  }

  public findAllRoles(){
    this.roleService.findAll().subscribe(data => {
      this.roles=data;
    })
  }

  public findAllQuestions(){
    this.questionService.findAll().subscribe(data => {
      this.questions=data;
    })
  }

  public findAllEvaluations(){
    this.evaluationService.findAll().subscribe(data => {
      this.evaluations=data;
    })
  }

  // Questions
  public addQuestion() {
    this.questionService.save(this.question).subscribe(() => {
      this.findAllQuestions();
      this.question = new Question();
    });
  }

  public deleteQuestion(id: number) {
    this.questionService.delete(id).subscribe(() => {
      this.findAllQuestions();
    });
  }
  //Evaluations
  public addEvaluation() {
    this.evaluationService.addEvaluation(this.evaluation).subscribe(() => {
      this.findAllEvaluations();
      this.evaluation = new Evaluation();
    });
  }

  public deleteEvaluation(id: number) {
    this.evaluationService.deleteEvaluation(id).subscribe(() => {
      this.findAllEvaluations();
    });
  }

  // Cours
  public findAllCours() {
    this.coursService.findAll().subscribe((data) => {
      this.courses = data;
    });
  }

  //SECURITY
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
   //A CHANGER LOGIN 


}
