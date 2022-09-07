import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private baseUrl=environment.apiBaseUrl+"examens"

  constructor(private httpClient:HttpClient) { }
    
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
    //Utilise la méthode get
  }
  public save(examen:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,examen);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); // http://localhost:7070/utilisateurs/1
  }
}
