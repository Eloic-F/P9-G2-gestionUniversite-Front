import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private baseUrl ="http://localhost:7070/comptes"

  constructor(private httpClient:HttpClient) { }
    
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
    //Utilise la méthode get
  }
  public save(compte:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,compte);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id); // http://localhost:7070/utilisateurs/1
  }
}