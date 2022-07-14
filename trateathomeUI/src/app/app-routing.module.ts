import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { AuxiliaireComponent } from './user/auxiliaire/auxiliaire.component';
import { InfermierComponent } from './user/infermier/infermier.component';
import { LoginComponent } from './user/login/login.component';
import { NotificationComponent } from './user/notification/notification.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RDVComponent } from './user/rdv/rdv.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: "Login" , component : LoginComponent},
  {path: "Register" , component : RegisterComponent},
  {path: "" , component : HomeComponent},
  {path: "Contact" , component : ContactComponent},
  {path: "profile" , component : ProfileComponent,canActivate:[AuthGuard],data: {
    role: ['admin', 'user','infer_aux']
  } },
  {path: "infermier" , component : InfermierComponent},
  {path: "details/:id" , component : DetailsComponent},

  {path: "Auxiliaire" , component : AuxiliaireComponent},
  {path: "RDV/:id" , component : RDVComponent,canActivate:[AuthGuard],data: {
    role: ['admin', 'user']
  } },
  {path: "Admin" , component : AdminComponent,canActivate:[AuthGuard],data: {
    role: 'admin'
  } },
  {path: "Notification" , component : NotificationComponent,canActivate:[AuthGuard],data: {
    role: ['admin', 'user','infer_aux']
  } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
