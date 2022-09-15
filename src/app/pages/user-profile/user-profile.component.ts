import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Academie } from 'src/app/model/academie';
import { CentreDeRecherche } from 'src/app/model/centre-de-recherche';
import { Compte } from 'src/app/model/compte';
import { Formation } from 'src/app/model/formation';
import { Personne } from 'src/app/model/personne';
import { Section } from 'src/app/model/section';
import { Universite } from 'src/app/model/universite';
import { AcademieService } from 'src/app/services/academie.service';
import { CentreDeRechercheService } from 'src/app/services/centre-de-recherche.service';
import { CompteService } from 'src/app/services/compte.service';
import { PersonneService } from 'src/app/services/personne.service';
import { RoleService } from 'src/app/services/role.service';
import { SectionService } from 'src/app/services/section.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  comptes!: any[];
  personnes!: any[];
  roles!: any[];
  universites!: any[];
  academies!: any[];
  centreDeRecherches!: any[];
  sections!: any[];
  formations!: any[];

  compte : Compte = new Compte();
  personne : Personne = new Personne();
  universite : Universite = new Universite();
  academie : Academie = new Academie();
  centreDeRecherche : CentreDeRecherche = new CentreDeRecherche();
  section : Section = new Section();
  formation : Formation = new Formation();

  constructor(private compteService:CompteService,
              private personneService:PersonneService,
              private roleService:RoleService,
              private academieService:AcademieService,
              private universiteService:UniversiteService,
              private centreDeRechercheService:CentreDeRechercheService,
              private sectionService:SectionService,
              private formationService:SectionService,
              private router:Router,
              private appService:AppService) { }

  ngOnInit(): void {
    this.findAllCompte();
    this.findAllPersonne();
    this.findAllRoles();
    this.findAllAcademie();
    this.findAllUniversite();
    this.findAllCentreDeRecherche();
    this.findAllSection();
    this.findAllFormation();
  }
  findAllCompte(){
    this.compteService.findAll().subscribe((data: any[]) => {this.comptes = data;});
  }
  findAllPersonne(){
    this.personneService.findAll().subscribe((data: any[]) => {this.personnes = data;});
  }

  findAllRoles(){
    this.roleService.findAll().subscribe((data: any[]) => {this.roles = data;});
  }
  findAllAcademie(){
    this.academieService.findAll().subscribe((data: any[]) => {this.academies = data;});
  }

  findAllUniversite(){
    this.universiteService.findAll().subscribe((data: any[]) => {this.universites = data;});
  }
  findAllCentreDeRecherche(){
    this.centreDeRechercheService.findAll().subscribe((data: any[]) => {this.centreDeRecherches = data;});
  }
  findAllSection(){
    this.sectionService.findAll().subscribe((data: any[]) => {this.sections = data;});
  }
  findAllFormation(){
    this.formationService.findAll().subscribe((data: any[]) => {this.formations = data;});
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
    this.academieService.save(this.academie).subscribe(
      ()=>{
        this.findAllAcademie; //update list
        this.academie = new Academie(); //vider formulaire
      }
    )
    this.universiteService.save(this.universite).subscribe(
      ()=>{
        this.findAllUniversite(); //update list
        this.universite = new Universite(); //vider formulaire
      }
    )
    this.centreDeRechercheService.save(this.centreDeRecherche).subscribe(
      ()=>{
        this.findAllCentreDeRecherche(); //update list
        this.centreDeRecherche = new CentreDeRecherche(); //vider formulaire
      }
    )
    this.sectionService.save(this.section).subscribe(
      ()=>{
        this.findAllSection(); //update list
        this.section = new Section(); //vider formulaire
      }
    )
    this.formationService.save(this.formation).subscribe(
      ()=>{
        this.findAllFormation(); //update list
        this.formation = new Formation(); //vider formulaire
      }
    )
  }
  delete(id:number){
    this.compteService.delete(id).subscribe(()=>{this.findAllCompte()});
    this.personneService.deletePersonne(id).subscribe(()=>{this.findAllPersonne()});
  }
  editUser(user:Personne){
    // Step 2
    localStorage.removeItem("editUserId");
    // Step 1
    localStorage.setItem("editUserId",user.id.toString());
    // Step 3
    // localhost:4200/editUser/3
    this.router.navigate(['/editUser',user.id]);
    }
   editCompte(compte:Compte){
    // Step 2
    localStorage.removeItem("editCompteIdCompte");
    // Step 1
    localStorage.setItem("editCompteIdCompte",compte.idCompte.toString());
    // Step 3
    // localhost:4200/editUser/3
    this.router.navigate(['/editCompte',compte.idCompte]);
    }

    authorities(){
      if(this.appService.isEnseignant == true || this.appService.isEtudiant ==true){
        return false;
      }else{
        return true;
      }
    }

}
