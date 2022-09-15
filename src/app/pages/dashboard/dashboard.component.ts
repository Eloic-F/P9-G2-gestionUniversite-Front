import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Cours } from 'src/app/model/cours';
import { Personne } from 'src/app/model/personne';
import { AppService } from 'src/app/app.service';
import { ExamenService } from 'src/app/services/examen.service';
import { PersonneService } from 'src/app/services/personne.service';
import { StatsService } from 'src/app/services/stats.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  
  userId= sessionStorage.getItem("UserId");
  moy:number;
  tauxReussite:number;
  nbrEleve:number;
  nbrEvaluation:number;
  nbQuestion:number;
  moyi:any[];
  quest:any[];
  tauxR:any[];
  nombreEval:any[];
  courses:Cours[];


  constructor(
    private appService:AppService,private statService:StatsService,private personneService:PersonneService,
    private examenService:ExamenService) { }
    

  ngOnInit() {
    if(!this.userId){
      alert("ErreurID")
      return;
    }
    var personne:Personne=new Personne();
    var cours:Cours=new Cours();
    this.personneService.findOne(+this.userId).subscribe((data:any)=>{personne=data});
    let classeId=personne.classe.idClasse;
    this.nbEleve(classeId);
    let coursId:number
    this.courses=personne.courses
    this.courses.forEach(function(value){
      coursId=value.idCours
      this.moyenne(coursId,+this.userId);
      this.nbrQuest(coursId);
      this.tauxDeReussite(coursId);
      this.nbrEval(coursId);
      this.moyi.push(this.moy);
      this.quest.push(this.nbQuestion);
      this.tauxR.push(this.tauxReussite*100);
      this.nombreEval.push(this.nbrEvaluation)
    })
    
    this.datasets = [
      [this.moyi],
      [this.quest],
      [this.tauxR],
      [this.nombreEval]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample1.options,
      data: chartExample1.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }
  
  authorities(){
    if(this.appService.isAdmin){
      return false;
    }else{
      return true;
    }
  }

  moyenne(id:number,idd:number){
    this.statService.moyenne(id,idd).subscribe((data:any)=>{this.moy=data});
  }

  tauxDeReussite(id:number){
    this.statService.taux(id).subscribe((data:any)=>{this.tauxReussite=data});
  }

  nbrEval(id:number){
    this.statService.nbrEvalutation(id).subscribe((data:any)=>this.nbrEvaluation=data)
  }
  nbrQuest(id:number){
    this.statService.nbrQuestion(id).subscribe((data:any)=>{this.nbQuestion=data})
  }

  nbEleve(id:number){
    this.statService.nbrEleve(id).subscribe((data:any)=>{this.nbrEleve=data})
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
  

  


}
