import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../Service/feedback.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Input()doc:any;

  constructor(private as:FeedbackService,private http:HttpClient,private router : Router) { }

  ngOnInit(): void {
  }
  invalidregister:boolean | undefined;

  ajouter(f : NgForm){
    let rate = f.value['rate'];
    let message = f.value['message'];
    
   
   if(rate !== "" && message !== "" ){
    var val = {
        rate: rate,
        message:message,
        id_user:this.doc
    }
    this.as.Addfeedback(val).subscribe(res=>{
      alert("thinx for putting your feedback")
    });

   }  
  }

}
