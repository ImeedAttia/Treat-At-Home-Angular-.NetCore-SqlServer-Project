import { Component, OnInit } from '@angular/core';
import { RdvService } from 'src/app/Service/rdv.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  rdvList:any=[];

  constructor(
    public service:RdvService,public as:UserService) { }

  refreshList(){
    this.service.getRDVList().subscribe(data=>{
      this.rdvList=data;
    });
  }

  ngOnInit(): void {
    this.refreshList();
  }



  DeleteClick(item:any){
    if(confirm("are u sure ??")){
      this.service.DeleteRDV(item.idrdv).subscribe(data=>{
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
