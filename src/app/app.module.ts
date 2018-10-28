import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { FilmsComponent } from './films/films.component';
import { HighLightDirective } from './high-light.directive';
import { ShowMoviesDirective } from './show-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent,
    FilmsComponent,
    HighLightDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        
        { path: "SignUp", component: SignUpComponent, pathMatch: "full"}, 
        { path: "UserProfile", component: UserProfileComponent, pathMatch: "full"},
        { path: "Films", component: FilmsComponent, pathMatch: "full"},
        { path: "", redirectTo: "Menu", pathMatch: "full"}
  ],

  {useHash: true}
  )
],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
