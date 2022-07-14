import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean | undefined;
  constructor(private router:Router,private http:HttpClient) { }

  login(form: NgForm) {
    const credentials = {
      'useremail':form.value.useremail,
      'userpassword':form.value.userpassword
       
    };
    this.http.post("https://localhost:44329/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).Token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate([""]);
      
    }, err => {
      this.invalidLogin = true;
    });
  }


  ngOnInit(): void {
  }





}
