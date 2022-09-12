import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { find } from 'rxjs';
import { Cours } from 'src/app/model/cours';
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
  userId= sessionStorage.getItem("UserId");
  editForm:FormGroup;
  coursForm:FormGroup;
  examentForm:FormGroup;
  questionForm:FormGroup;
  utilisateur:Personne=new Personne;
  selectedFiles:FileList;
  currentFileUpload:File;
  cours!:any[];
  questions!:any[];
  examens!:any[];
  question:IHash={};
  examen:Examen=new Examen;
  selectedFile:FileList;
  public copy: string;
  constructor(private coursService:CoursService,private examenService:ExamenService,private questionService:QuestionService,private personneService:PersonneService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let name=sessionStorage.getItem("Username");
    if(!this.userId){
      alert("ErreurID")
      return;
    }
    this.editForm=this.formBuilder.group({
      id:[],
      username:[],
    })
    this.coursForm=this.formBuilder.group({
      image:[,Validators.required],
    })
    this.examentForm=this.formBuilder.group({
      note:[,Validators.required],
      correction:[,Validators.required]
      
    })
    this.questionForm=this.formBuilder.group({
      questions:[,Validators.required]
    })

    this.personneService.findOne(+this.userId).subscribe(data => {this.editForm.setValue(data)})
    this.ActualUser(+this.userId);
    this.findAllCours(+this.userId);
    this.findAllExamen(+this.userId);
    this.findAllQuestion(+this.userId);

 
    
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
    var questionJson=JSON.stringify(this.questionForm.value);
    this.questionService.update(questionJson).subscribe(()=>{
      this.ngOnInit
    })
    

  }

  correct(){
    var examenJSON=JSON.stringify(this.examentForm.value);
    this.examenService.update(examenJSON).subscribe(()=>{this.ngOnInit})
  }
  depot(id:number){
    this.currentFileUpload = this.selectedFiles.item(0);
    let crs:Cours=new Cours();
    this.coursService.findOne(id).subscribe(data=>(crs=data));
    var coursJson=JSON.stringify(this.coursForm.value)
    this.coursService.update(coursJson).subscribe(()=>{
     this.ngOnInit;
    this.selectedFile=undefined;
    })




  }


  
}
