import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evaluation } from '../model/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl=environment.apiBaseUrl+"evaluations"
  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  public addEvaluation(evaluation:Evaluation):Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, evaluation);
  }

  public deleteEvaluation(idEvaluation:number):Observable<void>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${idEvaluation}`);
  }

  /*public updateEvaluation(evaluation:Evaluation):Observable<any>{
    return this.httpClient.put<any>(`${this.baseUrl}`, evaluation);
  }*/
}
