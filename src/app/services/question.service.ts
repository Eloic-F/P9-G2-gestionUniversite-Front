import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl=environment.apiBaseUrl+"questions"

  constructor(private httpClient:HttpClient) { }
    
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
    //Utilise la méthode get
  }
  public save(question:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,question);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); // http://localhost:7070/utilisateurs/1
  }
  public update(question:any):Observable<any>{
    var questionParse=JSON.parse(question);
    return this.httpClient.put(this.baseUrl+'/'+questionParse.idUtilisateur,questionParse);
  }
}
