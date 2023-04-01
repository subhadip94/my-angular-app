import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { UtilityComponent } from './utility/utility.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'server', component: ServerComponent},
  {path:'header', component: HeaderComponent},
  {path:'detail', component: DetailsComponent},
  {path:'utility', component: UtilityComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    UtilityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
