import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  menuSignup:string ='Sign-Up';
  menuUserProfile:string ='User Profile';
  menuFilms:string = 'Films';

  constructor() { }

  ngOnInit() {
  }

}
