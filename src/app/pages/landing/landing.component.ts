/*
  todo: Implement Landing Page. Currently not in use, if you're not logged in you will be sent to login
  Description:
      This component will be the default landing for users, open to the public. Will have
      advertising and incentive to signup, description of services and how it works, etc.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
