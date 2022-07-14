import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InferAuxService {

  readonly APIUrl = "https://localhost:44329/api";
  constructor(private http: HttpClient) { }




  getinfer_auxFID(id:any){
    return this.http.get<any>(this.APIUrl+'/infer_aux/'+id);
  }
  Addinfer_aux(val:any){
    return this.http.post(this.APIUrl+'/infer_aux',val);
    }
    getinfer_auxList():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/infer_aux');
  }
  
  
    Deleteinfer_aux(id:any){
      return this.http.delete(this.APIUrl+'/infer_aux/'+id);
      }
      Updateinfer_aux(val:any){
        return this.http.put(this.APIUrl+'/infer_aux',val);
        }
}
