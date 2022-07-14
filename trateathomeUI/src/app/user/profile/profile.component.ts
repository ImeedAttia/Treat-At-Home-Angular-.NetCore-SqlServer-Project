import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateService } from 'src/app/Service/date.service';
import { InferAuxService } from 'src/app/Service/infer-aux.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any=[];
  Commande:any=[];
  validity : string = "";
  userPathPhoto:string="";
  userPathImg:string="";
  show : boolean = false;
  info:any=[];
  date:any=[];
  id!:number;
  role!:string;
  constructor(public service:UserService,public inferservice:InferAuxService,public dateService: DateService) { }

  ngOnInit(): void {
    
    this.refreshProfile();
    this.refresh();
   
  }
  refreshProfile(){
    let token = localStorage.getItem('jwt') as string;
   let id = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    this.role = JSON.parse(window.atob(token.split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
   this.id = id;
   console.log(this.id)
   this.service.getuserFID(id).subscribe(data=>{
      this.user=data;
     
       });
    
    }


    addArt(item:any){
      var val = {
        UserId:item.UserId,
          username:item.username,
          userLastname:item.userLastname,
          userPhonenum:item.userPhonenum,
          usersexe:item.usersexe,
          usercountry:item.usercountry,
          useremail:item.useremail,
          userpassword:item.userpassword,
          UserRole:item.UserRole,
          userPathImg:this.userPathImg
      };
      this.service.UpdateUser(val).subscribe(res=>{
        alert(res.toString());
      });
    }
  
    uploadPhoto(event:any){
      var file=event.target.files[0];
      const formData:FormData=new FormData();
      formData.append('uploadedFile',file,file.name);
      this.service.uploadPhoto(formData).subscribe((data:any)=>{
        this.userPathImg = data.toString();
      });
    
    }
    verify(){
      this.show = true;
    }


    refresh(){

      this.inferservice.getinfer_auxFID(this.id).subscribe(data=>{
        this.info=data;
      });
      this.dateService.getDateFID(this.id).subscribe(data=>{
        this.date=data;
      });
  }

  ajouter(f : NgForm){
    let date = f.value['date'];
    
   
   if(date !== ""){
    var val = {
        id_user:this.id, 
        date: date
       
    }
    alert(date)
    this.dateService.AddDate(val).subscribe(res=>{
//      this.router.navigateByUrl('/Home');
alert(res.toString());
    });

   }  
  }


  }
  
