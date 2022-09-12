import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evaluation } from 'src/app/model/evaluation';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-edit-evaluation',
  templateUrl: './edit-evaluation.component.html',
  styleUrls: ['./edit-evaluation.component.scss']
})
export class EditEvaluationComponent implements OnInit {
  editForm!: FormGroup;
  evaluation:Evaluation = new Evaluation();

  constructor(private router:Router,private evaluationService: EvaluationService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let evalId=localStorage.getItem("editEvalId");
    if(!evalId){
      alert("Invalid Action");
      this.router.navigate(['/evaluation-question']);
      return;
    }
    this.editForm=this.formBuilder.group({
      idEvaluation:[],
      commentaire:['',Validators.required]
    })
    this.evaluationService.findOne(+evalId).
    subscribe(data =>{this.editForm.setValue(data)});
  }

  updateEvaluation(){
    var evalJson=JSON.stringify(this.editForm.value);
    this.evaluationService.updateEvaluation(evalJson).
    subscribe(()=>{this.router.navigate(['/evaluation-question'])});
  }

}
