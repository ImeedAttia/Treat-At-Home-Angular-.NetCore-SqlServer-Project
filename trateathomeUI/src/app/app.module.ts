import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProduitComponent } from './user/produit/produit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { InfermierComponent } from './user/infermier/infermier.component';
import { RDVComponent } from './user/rdv/rdv.component';
import { AuxiliaireComponent } from './user/auxiliaire/auxiliaire.component';
import { NotificationComponent } from './user/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './Service/user.service';
import { UserAddEditComponent } from './admin/user-add-edit/user-add-edit.component';
import { UserShowComponent } from './admin/user-show/user-show.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserFeedbackComponent } from './admin/user-feedback/user-feedback.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DetailsComponent } from './details/details.component';
import { RdvComponent } from './admin/rdv/rdv.component';



export function tokenGetter(){
  return localStorage.getItem("jwt");
}




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProduitComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    AdminComponent,
    InfermierComponent,
    RDVComponent,
    AuxiliaireComponent,
    NotificationComponent,
    UserAddEditComponent,
    UserShowComponent,
    FeedbackComponent,
    UserFeedbackComponent,
    DetailsComponent,
    RdvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter
        ,allowedDomains:["localhost:44329"],
        disallowedRoutes: []
      }
    })
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
