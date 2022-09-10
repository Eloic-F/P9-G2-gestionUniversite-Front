import { Component, OnInit, OnDestroy } from '@angular/core';
import { Evaluation } from 'src/app/model/evaluation';
import { Question } from 'src/app/model/question';
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
  users!: any[];
  roles!: any[];

  constructor(private personneService: PersonneService, private roleService:RoleService) {}

  ngOnInit() {
    this.findAllPersonne();
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
}
