import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/compte';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  comptes!: any[];
  compte : Compte = new Compte();
  constructor(private compteService:CompteService) { }

  ngOnInit(): void {
    this.findAllCompte();
  }
  findAllCompte(){
    this.compteService.findAll().subscribe((data: any[]) => {this.comptes = data;});
  }
  save(){
    this.compteService.save(this.compte).subscribe(
      ()=>{
        this.findAllCompte(); //update list
        this.compte = new Compte(); //vider formulaire
      }
    )
  }
  delete(id:number){
    this.compteService.delete(id).subscribe(()=>{this.findAllCompte()});
  }
}
