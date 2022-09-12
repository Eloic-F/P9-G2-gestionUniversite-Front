import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl=environment.apiBaseUrl+"personnes"
  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  public findAllQuestions(idPersonne:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/"questions/${idPersonne}`);
  }
  public findAllExamens(idPersonne:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/"examens/${idPersonne}`);
  }
  public findAllCours(idPersonne:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/"cours/${idPersonne}`);
  }


  public addPersonne(personne:Personne):Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}`, personne);
  }

  public deletePersonne(idPersonne:number):Observable<void>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${idPersonne}`);
  }
  public findOne(idPersonne:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/${idPersonne}`);
  }
  public findOneByUsername(username:string):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/secu/${username}`);
  }




  /*public updatePersonne(personne:Personne):Observable<any>{
    return this.httpClient.put<any>(`${this.baseUrl}`, personne);
  }*/
}
