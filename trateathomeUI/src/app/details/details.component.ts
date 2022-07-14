import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from '../Service/date.service';
import { FeedbackService } from '../Service/feedback.service';
import { InferAuxService } from '../Service/infer-aux.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ActivateFeedbackComp:boolean=false;
  id!:number;
  user:any=[];
  info:any=[];
  date:any=[];
  feed:any=[];
  doc!:number;
    constructor(public ar: ActivatedRoute,private router: Router,public as:UserService,public inferservice:InferAuxService,public dateService: DateService,public feedservice:FeedbackService) {
     // pour recuprer l'id du article
      this.ar.params.subscribe(
        data => {this.id = data.id;}
      );
     }
  
    ngOnInit(): void {
      this.refresh();
    }



  refresh(){
      this.as.getuserFID(this.id).subscribe(data=>{
        this.user=data;
      });
      this.inferservice.getinfer_auxFID(this.id).subscribe(data=>{
        this.info=data;
      });
      this.dateService.getDateFID(this.id).subscribe(data=>{
        this.date=data;
      });
      this.feedservice.getfeedbackFID(this.id).subscribe(data=>{
        this.feed=data;
      });

  }


  closeClick(){
    this.ActivateFeedbackComp=false;
  }
  addClick(){
    this.doc=this.id

    this.ActivateFeedbackComp=true;
  }




}
