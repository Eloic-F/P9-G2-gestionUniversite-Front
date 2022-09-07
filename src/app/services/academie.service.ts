import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcademieService {

  private baseUrl=environment.apiBaseUrl+"academies"
  constructor(private httpClient:HttpClient) {}
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  public save(academie:any) :  Observable<any>{
    return this.httpClient.post(this.baseUrl,academie);
  }
  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
