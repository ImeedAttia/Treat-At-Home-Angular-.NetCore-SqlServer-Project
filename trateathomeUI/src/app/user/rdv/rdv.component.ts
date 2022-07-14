import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from 'src/app/Service/date.service';
import { InferAuxService } from 'src/app/Service/infer-aux.service';
import { RdvService } from 'src/app/Service/rdv.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RDVComponent implements OnInit {

  user:any=[];
  Commande:any=[];
  validity : string = "";
  id!:number;
  idinfer!:number;
  userinfer:any=[];
  info:any=[];
  date:any=[];
  constructor(public service:UserService,public ar: ActivatedRoute,public as:UserService,public dateService: DateService,private http:HttpClient,private router : Router,public rdvservice:RdvService) {
    // pour recuprer l'id du article
    this.ar.params.subscribe(
      data => {this.idinfer = data.id;}
    );
   }

  ngOnInit(): void {
    
    this.refreshProfile();
    this.refresh();
   
  }
  refreshProfile(){
    let token = localStorage.getItem('jwt') as string;
   let id = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    this.service.getuserFID(id).subscribe(data=>{
      console.log(data);
      this.id = id;
      this.user=data;
    });
    
    }



    refresh(){
      this.as.getuserFID(this.idinfer).subscribe(data=>{
        this.userinfer=data;
      });
      this.dateService.getDateFID(this.idinfer).subscribe(data=>{
        this.date=data;
      });
  }

  rdv(f : NgForm){
    let subject = f.value['subject'];
    let date = f.value['date'];
    if(subject !== ""  ){
    var val = {
        id_user:this.id,
        id_infer_aux:this.idinfer,
        role_infer_aux:"infermier",
        subject:subject,
        date:date,
        status:2
    }
    this.rdvservice.AddRDV(val).subscribe(res=>{
      this.router.navigateByUrl('/');
     
     
    });
  }

}}
