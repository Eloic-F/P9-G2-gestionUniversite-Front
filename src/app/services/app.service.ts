import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated=false;
  responseAll: any;

  isAdmin=false;
  isEnseignant=false;
  isEtudiant=false;

  constructor(private httpClient:HttpClient) { }

  authenticate(credentials:any,callback:any){
      const headers = new HttpHeaders(
      credentials?{
        authorization : 'Basic ' + btoa(credentials.username+ ':' + credentials.password)
      } : {}   
      );
      this.httpClient.get(environment.apiBaseUrl+'login/user',{headers:headers}).subscribe(response =>{
        this.responseAll = response;
        if(this.responseAll['username']){
          this.authenticated = true;
          for(let i=0;i<this.responseAll['roles'].length;i++){
            if(this.responseAll['roles'][i]['idRole']==1){
              this.isAdmin = true;
            }
            if(this.responseAll['roles'][i]['idRole']==2){
              this.isEnseignant = true;
            }
            if(this.responseAll['roles'][i]['idRole']==3){
              this.isEtudiant = true;
            }
          }
        }else{
          this.authenticated = false;
        }
        return callback && callback();
      })


  }
}
