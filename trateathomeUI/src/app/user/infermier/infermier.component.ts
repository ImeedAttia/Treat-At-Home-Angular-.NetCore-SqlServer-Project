import { Component, OnInit } from '@angular/core';
import { InferAuxService } from 'src/app/Service/infer-aux.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-infermier',
  templateUrl: './infermier.component.html',
  styleUrls: ['./infermier.component.css']
})
export class InfermierComponent implements OnInit {

  constructor(public service:InferAuxService,public uservice:UserService) { }
 
  listInfer:any=[];
  user:any=[];
  userpathImg:string="";
  id!:number;




  refreshList(){
    this.uservice.getUsrList().subscribe(data=>{
      this.listInfer=data;

     
    });
  }

  ngOnInit(): void {
    this.refreshList(); 
  }




  role(id:number,role:string){
    this.service.getinfer_auxFID(id).subscribe(data=>{
      this.user = data;
    });
    if(this.user[0].role_infer_aux == "infer" && role == "infer_aux")    {
      return true;
     } else{
      return false;
     }
  }

}
