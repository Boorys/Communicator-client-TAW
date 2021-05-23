import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { ChatComponent } from './components/chat/chat.component';
import { FindFriendComponent } from './components/find-friend/find-friend.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuardService } from './services/route-guard.service';


const routes: Routes = [
  { path: 'login', component:  LoginComponent },
  { path: '', component:  LoginComponent },
  { path: 'chat', component:  ChatComponent, canActivate:[RouteGuardService] },
  { path: 'addFriend', component:  FindFriendComponent, canActivate:[RouteGuardService] },
  { path: 'register', component:  RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
