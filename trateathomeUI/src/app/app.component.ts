import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trateathome';


  constructor(private router:Router,private jwtHelper:JwtHelperService){

  }
count !: number;


  ngOnInit(): void {
  }



  role(){
    let token = localStorage.getItem('jwt') as string;
    if(JSON.parse(window.atob(token.split('.')[1]))["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]== "admin"){
      return true;
    }else{
      return false;
    }
  }


isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt") as string;
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }


logout(){
  localStorage.removeItem("jwt");
}


}
