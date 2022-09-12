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
  personnes!: any[];
  roles!: any[];

  question: Question = new Question();
  evaluation: Evaluation = new Evaluation();
  constructor(private personneService: PersonneService, private roleService:RoleService) {}

  ngOnInit() {
    let userId=sessionStorage.getItem('UserId');
    let name=sessionStorage.getItem("Username");
    if(!userId){
      alert("ErreurID")
      return;
    }
    this.findAllPersonne();
  }

  // Personne : enseignant
  public findAllPersonne() {
    this.personneService.findAll().subscribe((data) => {
      this.personnes = data;
    });
  }

  public findAllRoles(){
    this.roleService.findAll().subscribe(data => {
      this.roles=data;
    })
  }
}
