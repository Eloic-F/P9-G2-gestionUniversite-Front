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
  public findAllRoles(idPersonne:number):Observable<void>{
    return this.httpClient.get<any>(`${this.baseUrl}/"roles/${idPersonne}`);
  }
  
  public findAllUniversites(idUniversite:number):Observable<void>{
    return this.httpClient.get<any>(`${this.baseUrl}/"universites/${idUniversite}`);
  }


  public findAllAcademies(idAcademie:number):Observable<void>{
    return this.httpClient.get<any>(`${this.baseUrl}/"academies/${idAcademie}`);
  }
  public findAllCentreDeRecherches(idCentreDeRecherche:number):Observable<void>{
    return this.httpClient.get<any>(`${this.baseUrl}/"centreDeRecherches/${idCentreDeRecherche}`);
  }
  public findAllSections(idSection:number):Observable<void>{
    return this.httpClient.get<any>(`${this.baseUrl}/"sections/${idSection}`);
  }
  public findAllFormations(idFormation:number):Observable<void>{
    return this.httpClient.get<any>(`${this.baseUrl}/"formations/${idFormation}`);
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

  public getPersonne(idPersonne:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/${idPersonne}`);
  }
  public updatePersonne(user:any):Observable<any>{
    var userParse = JSON.parse(user);
    return this.httpClient.put(this.baseUrl+'/'+userParse.id,userParse);
  }


  /*public updatePersonne(personne:Personne):Observable<any>{
    return this.httpClient.put<any>(`${this.baseUrl}`, personne);
  }*/
}
