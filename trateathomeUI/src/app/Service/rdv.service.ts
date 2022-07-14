import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  
  readonly APIUrl = "https://localhost:44329/api";
  constructor(private http: HttpClient) { }





  AddRDV(val:any){
    return this.http.post(this.APIUrl+'/rdv',val);
    }
    getRDVList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/rdv');
  }
  
    DeleteRDV(id:any){
      return this.http.delete(this.APIUrl+'/rdv/'+id);
      }
      UpdateRDV(val:any){
        return this.http.put(this.APIUrl+'/rdv',val);
        }
      
        getRDVGetUsrId(id:any){
          return this.http.get<any>(this.APIUrl+'/rdv/GetUsrId/'+id);
        }
        getRDVgetInfer(id:any){
          return this.http.get<any>(this.APIUrl+'/rdv/getInfer/'+id);
        }
}
