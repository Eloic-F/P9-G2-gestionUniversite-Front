import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/model/cours';
import { Formation } from 'src/app/model/formation';
import { Personne } from 'src/app/model/personne';
import { Question } from 'src/app/model/question';
<<<<<<< HEAD
import { UE } from 'src/app/model/ue';
=======
import { AppService } from 'src/app/services/app.service';
>>>>>>> frontSecurity
import { CoursService } from 'src/app/services/cours.service';
import { FormationService } from 'src/app/services/formation.service';
import { PersonneService } from 'src/app/services/personne.service';
import { QuestionService } from 'src/app/services/question.service';
import { UEService } from 'src/app/services/ue.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
selectFile($event: any) {
throw new Error('Method not implemented.');
}

  courss!: any[]; 
  cours : Cours = new Cours();
  questions!: any[]; 
  question : Question = new Question();
  personnes!: any[]; 
  personne : Personne = new Personne();
  ues!: any[]; 
  ue : UE = new UE();
  formations!: any[]; 
  formation : Formation = new Formation();
  selectedFiles:FileList;
  currentFileUpload:File;
 
<<<<<<< HEAD
  constructor(private coursService:CoursService,private questionService:QuestionService,private personneService:PersonneService, 
    private ueService:UEService, private formationService:FormationService) { }
=======
  constructor(private coursService:CoursService,private questionService:QuestionService,
    private appService:AppService) { }
>>>>>>> frontSecurity

  ngOnInit(): void {
    let userId=sessionStorage.getItem('UserId');
    let name=sessionStorage.getItem("Username");
    if(!userId){
      alert("ErreurID")
      return;
    }
    
    this.findAllCours();
    this.findAllQuestion();
    this.findAllPersonne();
    this.findAllUe
    this.findAllFormation
  }
  

  findAllCours(){
    this.coursService.findAll().subscribe((data: any[]) => {this.courss = data;});
  }
  findAllQuestion(){
    this.questionService.findAll().subscribe((data: any[]) => {this.questions = data;});
  }
  findAllPersonne(){
    this.personneService.findAll().subscribe((data: any[]) => {this.personnes = data;});
  }
  findAllUe(){
    this.ueService.findAll().subscribe((data: any[]) => {this.ues = data;});
  }
  findAllFormation(){
    this.formationService.findAll().subscribe((data: any[]) => {this.formations = data;});
  }

  saveQuestion(){
    this.questionService.save(this.question).subscribe(
      ()=>{
        this.findAllQuestion(); //update list
        this.question = new Question(); //vider formulaire
      }
    )
    
    }
    selectFile1(event:any){
      this.selectedFiles = event.target.files;
    }

<<<<<<< HEAD
    saveCours(){
      this.currentFileUpload = this.selectedFiles.item(0);
      this.coursService.save(this.currentFileUpload,this.cours).subscribe(
        ()=>{
          this.findAllCours(); //update list
          this.cours = new Cours(); //vider formulaire
          this.selectedFiles = undefined;
        }
      )
    }

    delete(id:number){
      this.coursService.delete(id).subscribe(()=>{
        this.findAllCours()});
    }
=======
    //
  authorities(){
    if(this.appService.isAdmin == true || this.appService.isEtudiant ==true){
      return false;
    }else{
      return true;
    }
  }

>>>>>>> frontSecurity
 }
  


