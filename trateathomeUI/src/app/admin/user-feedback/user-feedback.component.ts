import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Service/feedback.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {
  FeedbackList:any=[];

  constructor(
    public service:FeedbackService,public as:UserService
  ) { }

  refreshList(){
    this.service.getfeedbackList().subscribe(data=>{
      this.FeedbackList=data;
    });
  }

  ngOnInit(): void {
    this.refreshList();
    console.log(this.refreshList());
  }
  DeleteClick(item:any){
    if(confirm("are u sure ??")){
      this.service.Deletefeedback(item.id_feed).subscribe(data=>{
        alert(data.toString())
        this.refreshList();
      })
    }

  }
  getusrname(id:any){
    console.log(id)
  //  this.as.getuserFID(id).subscribe(data=>{
  //    console.log(data.username);
  //  });
  }
  

}
