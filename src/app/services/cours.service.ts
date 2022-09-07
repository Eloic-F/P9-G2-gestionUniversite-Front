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
    const formData=new FormData();
    formData.append('libelleCours',cours.libelleCours);
    formData.append('dureeCours',cours.dureeCours);
    formData.append('image',image);
    const requete = new HttpRequest('POST',this.baseUrl,formData,
    {reportProgress:true,responseType:'text'});
    return this.httpClient.request(requete);
  }
  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
