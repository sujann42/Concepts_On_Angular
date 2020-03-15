import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {
    ids: 990,
    names: 'Sam',
    emails: 'sam@gmail.com',
    mobiles: 2149980525
  };

  constructor() { }

  ngOnInit() {
  }

}
