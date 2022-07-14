import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  UserList:any=[];
  usr:any;
  ModalTitle:string="";
  ActivateAddEditUserComp:boolean=false;
  constructor(public service:UserService) { }

  refreshList(){
    this.service.getUsrList().subscribe(data=>{
      this.UserList=data;
    });
  }

  ngOnInit(): void {
    this.refreshList();
    console.log(this.refreshList());
  }
  DeleteClick(item:any){
    if(confirm("are u sure ??")){
      this.service.DeleteUsr(item.UserId).subscribe(data=>{
        alert(data.toString())
        this.refreshList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditUserComp=false;
    this.refreshList();
  }
  EditClick(item: any){
  this.usr=item;
  this.ModalTitle="Edit User";
  this.ActivateAddEditUserComp=true;
  }
  addClick(){
    this.usr={
      UserId:0,
      username:"",
      userLastname:"",
      userPhonenum:0,
      usersexe:"",
      usercountry:"",
      useremail:"",
      userpassword:"",
      UserRole:"",
      userPathImg:"annonyms.jpg"
    }
    this.ModalTitle="add User";
    this.ActivateAddEditUserComp=true;
  }

}
