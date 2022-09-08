import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private baseUrl=environment.apiBaseUrl+"cours";
 
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  

  public save(image:File,cours:Cours):Observable<any>{
    const formData= new FormData();
    formData.append('libelleCours',cours.libelleCours),
    formData.append('dureeCours',String(cours.dureeCours)),
    formData.append('dateCours',String(cours.dateCours)),
    formData.append('image',image);
    formData.append('ue',String(cours.ue));
    formData.append('formation',String(cours.formation));
    formData.append('evaluations',String(cours.evaluations));
    formData.append('personne',String(cours.personne));
    formData.append('questions',String(cours.questions));
    const requete= new HttpRequest('POST',this.baseUrl,formData,{reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }
  

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
