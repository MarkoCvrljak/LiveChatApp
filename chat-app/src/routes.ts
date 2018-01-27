import { Routes } from '@angular/router';
import { SigninFormComponent } from './app/signin-form/signin-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { ChatRoomComponent } from './app/chatroom/chatroom.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SigninFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'chat', component: ChatRoomComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];
