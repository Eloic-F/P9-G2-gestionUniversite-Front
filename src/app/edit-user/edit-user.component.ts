import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
  })
  export class EditUserComponent implements OnInit {
 
  editForm!: FormGroup;
  personne:Personne = new Personne();
  constructor(private router:Router,private personneService:PersonneService,
  private formBuilder:FormBuilder) { }
  ngOnInit(): void {
  let userId = localStorage.getItem("editUserId");
  if(!userId){
    alert("Invalid Action!!!");
     this.router.navigate(['/espace-compte']);
  return;
  }
  this.editForm = this.formBuilder.group({
  id:[],
  nom: ['',Validators.required],
  prenom:['',Validators.required],
  dateNaissance:[,Validators.required],
  email:['',Validators.required],
  numeroTel:['',Validators.required],
  username:['',Validators.required],
  password:['',Validators.required]
  })
  this.personneService.getPersonne(+userId).
  subscribe(data => {this.editForm.setValue(data)});
  }
  updatePersonne(){
    var userJson = JSON.stringify(this.editForm.value);
  this.personneService.updatePersonne(userJson).subscribe(()=>{this.router.navigate(['/espace-compte'])});
  }
}