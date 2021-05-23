import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { HeaderComponent } from './components/header/header.component';
import { FindFriendComponent } from './components/find-friend/find-friend.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    FriendsListComponent,
    ChatWindowComponent,
    HeaderComponent,
    FindFriendComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    ScrollingModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
