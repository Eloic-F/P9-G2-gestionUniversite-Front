import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/compte';
import { Personne } from 'src/app/model/personne';
import { CompteService } from 'src/app/services/compte.service';
import { PersonneService } from 'src/app/services/personne.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  comptes!: any[];
  personnes!: any[];
  roles!: any[];
  compte : Compte = new Compte();
  personne : Personne = new Personne();


  constructor(private compteService:CompteService,private personneService:PersonneService,private roleService:RoleService) { }

  ngOnInit(): void {
    this.findAllCompte();
    this.findAllPersonne();
    this.findAllRoles();
  }
  findAllCompte(){
    this.compteService.findAll().subscribe((data: any[]) => {this.comptes = data;});
  }
  findAllPersonne(){
    this.personneService.findAll().subscribe((data: any[]) => {this.personnes = data;});
  }
  findAllRoles(){
    this.roleService.findAll().subscribe(data => {this.roles = data;});
  }
  save(){
    this.compteService.save(this.compte).subscribe(
      ()=>{
        this.findAllCompte(); //update list
        this.compte = new Compte(); //vider formulaire
      }
    )
    this.personneService.addPersonne(this.personne).subscribe(
      ()=>{
        this.findAllPersonne(); //update list
        this.personne = new Personne(); //vider formulaire
      }
    )
  }
  delete(id:number){
    this.compteService.delete(id).subscribe(()=>{this.findAllCompte()});
    this.personneService.deletePersonne(id).subscribe(()=>{this.findAllPersonne()});
  }
}
