import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/model/evaluation';
import { Question } from 'src/app/model/question';
import { CoursService } from 'src/app/services/cours.service';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { PersonneService } from 'src/app/services/personne.service';
import { QuestionService } from 'src/app/services/question.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-eval-quest',
  templateUrl: './eval-quest.component.html',
  styleUrls: ['./eval-quest.component.scss']
})
export class EvalQuestComponent implements OnInit {
  users!: any[];
  roles!: any[];
  questions!: any[];
  evaluations!: any[];
  courses!: any[];
  question: Question = new Question();
  evaluation: Evaluation = new Evaluation();

  constructor(private personneService: PersonneService,
    private roleService:RoleService,
    private questionService: QuestionService,
    private evaluationService: EvaluationService,
    private coursService:CoursService) { }

  ngOnInit(): void {
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

}
