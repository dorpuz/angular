import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { UserInfoComponent } from './user-info/user-info.component';
import {FormsModule} from "@angular/forms";
import { UserAddForrmComponent } from './user-info/user-add-forrm/user-add-forrm.component';

const appRoutes: Routes = [

  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    UserInfoComponent,
    UserAddForrmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
