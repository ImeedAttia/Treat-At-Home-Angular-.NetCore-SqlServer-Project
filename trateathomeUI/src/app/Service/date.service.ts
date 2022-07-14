import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  readonly APIUrl = "https://localhost:44329/api";
  constructor(private http: HttpClient) { }




  getDateFID(id:any){
    return this.http.get<any>(this.APIUrl+'/dates/'+id);
  }
  AddDate(val:any){
    return this.http.post(this.APIUrl+'/dates',val);
    }
    getDateList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/dates');
  }
  
    DeleteDate(id:any){
      return this.http.delete(this.APIUrl+'/dates/'+id);
      }
      UpdateDate(val:any){
        return this.http.put(this.APIUrl+'/dates',val);
        }
       
}
