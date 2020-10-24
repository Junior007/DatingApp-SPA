import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ListsComponent } from './components/lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';



export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },

    {
        path: '', // lo que pongamos aquí se agrega al inicio de la ruta sin /
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [{ path: 'members', component: MemberListComponent },
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent }]


    },



    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];





