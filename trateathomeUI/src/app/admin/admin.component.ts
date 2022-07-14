import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(){}
  vaariable ='User';

  change(type:string){
    this.vaariable = type;
    console.log(this.vaariable)
   }
  ngOnInit(): void {
    
  }
}
