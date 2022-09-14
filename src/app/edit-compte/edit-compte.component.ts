import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../model/compte';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.component.html',
  styleUrls: ['./edit-compte.component.scss']
})
export class EditCompteComponent implements OnInit {
  editForm!: FormGroup;
  compte:Compte = new Compte();
  constructor(private router:Router,private compteService:CompteService,
  private formBuilder:FormBuilder) { }
  ngOnInit(): void {
  let userId = localStorage.getItem("editCompteIdCompte");
  if(!userId){
    alert("Invalid Action!!!");
     this.router.navigate(['/espace-compte']);
  return;
  }
  this.editForm = this.formBuilder.group({
  idCompte:[],
  numeroCompte: ['',Validators.required],
  statut: ['',Validators.required]
  })
  this.compteService.getCompte(+userId).
  subscribe(data => {this.editForm.setValue(data)});
  }
  updatePersonne(){
    var userJson = JSON.stringify(this.editForm.value);
    this.compteService.updateCompte(userJson).subscribe(()=>{this.router.navigate(['/espace-compte'])});

  }
}