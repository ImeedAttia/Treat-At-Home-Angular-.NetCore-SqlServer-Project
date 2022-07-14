import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl = "https://localhost:44329/api";
  readonly PhotoUrl="https://localhost:44329/Photos/Users/";
  constructor(private http: HttpClient) { }




  getuserFID(id:any){
    return this.http.get<any>(this.APIUrl+'/user/'+id);
  }
  AddUser(val:any){
    return this.http.post(this.APIUrl+'/user',val);
    }
    getUsrList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/user');
  }
  
    DeleteUsr(id:any){
      return this.http.delete(this.APIUrl+'/user/'+id);
      }
      UpdateUser(val:any){
        return this.http.put(this.APIUrl+'/user',val);
        }
        uploadPhoto(val:any){
          return this.http.post(this.APIUrl+'/user/saveFile',val);
        }
  
}
