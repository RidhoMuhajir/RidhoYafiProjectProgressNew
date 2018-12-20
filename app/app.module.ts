import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KostComponent } from './kost/kost.component';
import { KomentarListComponent } from './komentar-list/komentar-list.component';

//tambah code berikut
import { KostListComponent } from './kost/kost-list/kost-list.component';
import { KostDetailComponent } from './kost/kost-detail/kost-detail.component';
//tambah code berkut (2)
import { KostItemComponent } from './kost/kost-list/kost-item/kost-item.component';
//tambah code berikut (3)
import { KomentarEditComponent } from "./komentar-list/komentar-edit/komentar-edit.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { KomentarListService } from './komentar-list/komentar-list.service';
import { KostEditComponent } from './kost/kost-edit/kost-edit.component';
import { KostStartComponent } from './kost/kost-start/kost-start.component';
import { KostService } from './kost/kost.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KostComponent,
    KomentarListComponent,

    
    //tambah code berikut
    KostListComponent,
    KostDetailComponent,
    //tambah code berikut (2)
    KostItemComponent,
    //tambahkan code berikut (3)
    KomentarEditComponent,
    DropdownDirective,
    KostStartComponent,
    KostEditComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [KomentarListService, KostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
