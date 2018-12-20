import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { KostComponent } from './kost/kost.component';
import { KomentarListComponent } from './komentar-list/komentar-list.component';
import { KostStartComponent } from './kost/kost-start/kost-start.component';
import { KostDetailComponent } from './kost/kost-detail/kost-detail.component';
import { KostEditComponent } from './kost/kost-edit/kost-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'home',pathMatch:'full' },
    { path:'kosts',component:KostComponent,children:[
        { path:'',component:KostStartComponent },
        { path: 'new',component:KostEditComponent },
        { path: ':id',component:KostDetailComponent },
        { path:':id/edit',component:KostEditComponent },
    ]},
    { path:'home',component:HomeComponent },
    { path:'komentar-list',component:KomentarListComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}