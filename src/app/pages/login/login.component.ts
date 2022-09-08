import { Component, OnInit, OnDestroy } from '@angular/core';
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
  users!: any[];
  roles!: any[];
  questions!: any[];
  evaluations!: any[];
  constructor(private personneService: PersonneService, private questionService: QuestionService, private evaluationService: EvaluationService,private roleService:RoleService) {}

  ngOnInit() {
    this.findAllPersonne();
    this.findAllQuestions();
    this.findAllEvaluations();
  }

  // Personne
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
}
