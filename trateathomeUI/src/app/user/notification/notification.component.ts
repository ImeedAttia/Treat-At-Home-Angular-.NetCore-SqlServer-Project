import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/Service/rdv.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  rdvList:any=[];
  id!:number;
  role!:string;

  constructor(public service:RdvService,public as:UserService) { }

  refreshList(){
    let token = localStorage.getItem('jwt') as string;
    this.id = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
     this.role = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    console.log(this.role)
     if(this.role == "user" || this.role == "admin"){
        this.service.getRDVGetUsrId(this.id).subscribe(data=>{
          this.rdvList=data;
        });
      }else if (this.role == "infer_aux"){
        this.service.getRDVgetInfer(this.id).subscribe(data=>{
          this.rdvList=data;
          console.log(this.rdvList)
        });
      }
  }

  ngOnInit(): void {
    this.refreshList();
  }
 check(status:number){
    if(status == 0){
      return "not valid"
    }
    else if(status == 1){
    return "valide"}
    else
    return "en cours"
    } 


    DeleteClick(item:any){
      if(confirm("are u sure ??")){
        this.service.DeleteRDV(item.idrdv).subscribe(data=>{
          alert(data.toString())
          this.refreshList();
        })
      }
  
    }


    valid(item:any,valid: number){
      var val = {
        idrdv:item.idrdv,
        id_user:item.id_user,
        id_infer_aux:item.id_infer_aux,
        role_infer_aux : item.role_infer_aux,
        subject: item.subject,
        date : item.date,
        status : valid
      };
    this.service.UpdateRDV(val).subscribe(res=>{
    });
    
    this.refreshList();
    }


}
