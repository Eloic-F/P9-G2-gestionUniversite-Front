import { Component, OnInit } from '@angular/core';
import { Academie } from 'src/app/model/academie';
import { CentreDeRecherche } from 'src/app/model/centre-de-recherche';
import { Compte } from 'src/app/model/compte';
import { Formation } from 'src/app/model/formation';
import { Personne } from 'src/app/model/personne';
import { Section } from 'src/app/model/section';
import { Universite } from 'src/app/model/universite';
import { AcademieService } from 'src/app/services/academie.service';
import { AppService } from 'src/app/services/app.service';
import { CentreDeRechercheService } from 'src/app/services/centre-de-recherche.service';
import { CompteService } from 'src/app/services/compte.service';
import { PersonneService } from 'src/app/services/personne.service';
import { RoleService } from 'src/app/services/role.service';
import { SectionService } from 'src/app/services/section.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
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
  //
  authenticated(){
    return  this.appService.authenticated; // false
   }
   //
   authorities(){
     if(this.appService.isAdmin == true){
       return false;
     }else{
       return true;
     }
   }
}
