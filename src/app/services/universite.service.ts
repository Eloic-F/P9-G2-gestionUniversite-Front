import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = "http:/localhost:7070/universites"
  constructor(private httpClient:HttpClient) {}
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  public save(universite:any) :  Observable<any>{
    return this.httpClient.post(this.baseUrl,universite);
  }
  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
