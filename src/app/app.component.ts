import { Component, route } from '@angular/core';
import {  OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Glosas-front';
  constructor(private route: Router)
}


  redi(){
    this.route.navigate(['../Dashboard']);


}
