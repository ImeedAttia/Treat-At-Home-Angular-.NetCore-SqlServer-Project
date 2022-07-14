import { Component, OnInit } from '@angular/core';
import { InferAuxService } from 'src/app/Service/infer-aux.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-auxiliaire',
  templateUrl: './auxiliaire.component.html',
  styleUrls: ['./auxiliaire.component.css']
})
export class AuxiliaireComponent implements OnInit {

  constructor(public service:InferAuxService,public uservice:UserService) { }
 
  listInfer:any=[];
  user:any=[];
  userlist:any=[];

  userpathImg:string="";
  id!:number;
  check !: boolean;

list:[] | undefined;


  refreshList(){

    this.uservice.getUsrList().subscribe(data=>{
      this.listInfer=data;
          });

   
  }

  ngOnInit(): void {
    this.refreshList(); 
    console.log(this.listInfer)
  }

rolefid(id:number){
  this.service.getinfer_auxFID(id).subscribe(data=>{
    
    return data[0].role_infer_aux as string
    
  });
  
}

}
