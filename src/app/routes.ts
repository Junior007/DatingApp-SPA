import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ListsComponent } from './components/lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailedResolve } from './_resolver/member-detailed.resolver';
import { MemberListResolve } from './_resolver/member-list.resolver';



export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },

    {
        path: '', // lo que pongamos aquí se agrega al inicio de la ruta sin /
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolve } },
            { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailedResolve } },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }]


    },



    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];





