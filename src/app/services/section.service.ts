import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private baseUrl = "http:/localhost:7070/sections"
  constructor(private httpClient:HttpClient) {}
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  public save(section:any) :  Observable<any>{
    return this.httpClient.post(this.baseUrl,section);
  }
  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}