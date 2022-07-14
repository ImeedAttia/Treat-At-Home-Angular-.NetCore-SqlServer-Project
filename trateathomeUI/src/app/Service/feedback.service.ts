import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  readonly APIUrl = "https://localhost:44329/api";
  constructor(private http: HttpClient) { }



  getfeedbackFID(id:any){
    return this.http.get<any>(this.APIUrl+'/feedback/'+id);
  }

  Addfeedback(val:any){
    return this.http.post(this.APIUrl+'/feedback',val);
    }
    getfeedbackList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/feedback');
  }
  
    Deletefeedback(id:any){
      return this.http.delete(this.APIUrl+'/feedback/'+id);
      }
    
  
}
