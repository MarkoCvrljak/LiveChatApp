import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatRoomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    MessageComponent,
    SigninFormComponent,
    LoginFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
