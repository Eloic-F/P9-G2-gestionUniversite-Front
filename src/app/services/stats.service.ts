import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private baseUrl=environment.apiBaseUrl+"stats"

  constructor(private httpClient:HttpClient) { }
  public moyenne(id:number,idd:number):Observable<any>{
    return this.httpClient.put(this.baseUrl+"/moyenne/"+id,idd) }

    public nbrQuestion(id:number):Observable<any>{
      return this.httpClient.get(this.baseUrl+"/nbrQuestion/"+id)
    }

    public taux(id:number):Observable<any>{
      return this.httpClient.get(this.baseUrl+"/taux/"+id)}

      public nbrEleve(id:number):Observable<any>{
        return this.httpClient.get(this.baseUrl+"/nbrEleve/"+id)
      }
      public nbrEvalutation(id:number):Observable<any>{
        return this.httpClient.get(this.baseUrl+"/nbrEvaluation/"+id)
      }
    }


