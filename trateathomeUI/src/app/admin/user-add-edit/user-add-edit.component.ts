import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {

  constructor(private service:UserService,private router : Router) { }
  @Input()usr:any;

  
  
   UserId:string="";
   username:string="";
   userLastname:string="";
   userPhonenum:string="";
   usersexe:string="";
   usercountry:string="";
   useremail:string="";
   userpassword:string="";
   UserRole:string="";
   userPathPhoto:string="";
   userPathImg:string="";
  ngOnInit(): void {
    this.UserId=this.usr.UserId;
    this.username=this.usr.username;
    this.userLastname=this.usr.userLastname;
    this.userPhonenum=this.usr.userPhonenum; 
    this.usersexe = this.usr.usersexe;
    this.usercountry=this.usr.usercountry; 
    this.useremail=this.usr.useremail; 
    this.userpassword=this.usr.userpassword; 
    this.UserRole=this.usr.UserRole; 
    this.userPathImg=this.usr.userPathImg; 
    this.userPathPhoto=this.service.PhotoUrl+this.userPathImg; 
  }

  addArt(){
    var val = {
      UserId:this.UserId,
        username:this.username,
        userLastname:this.userLastname,
        userPhonenum:this.userPhonenum,
        usersexe:this.usersexe,
        usercountry:this.usercountry,
        useremail:this.useremail,
        userpassword:this.userpassword,
        UserRole:this.UserRole,
        userPathImg:this.userPathImg
    };
    this.service.AddUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  

  
  EditArt(){
    var val = {
      UserId:this.UserId,
        username:this.username,
        userLastname:this.userLastname,
        userPhonenum:this.userPhonenum,
        usersexe:this.usersexe,
        usercountry:this.usercountry,
        useremail:this.useremail,
        userpassword:this.userpassword,
        UserRole:this.UserRole,
        userPathImg:this.userPathImg
    };
    this.service.UpdateUser(val).subscribe(res=>{
      alert(res.toString());
      this.router.navigate(["Admin"]);
    });
  }
  uploadPhoto(event:any){
  var file=event.target.files[0];
  const formData:FormData=new FormData();
  formData.append('uploadedFile',file,file.name);
  this.service.uploadPhoto(formData).subscribe((data:any)=>{
    this.userPathImg = data.toString();
    this.userPathPhoto=this.service.PhotoUrl+this.userPathImg;
  });

}


}
