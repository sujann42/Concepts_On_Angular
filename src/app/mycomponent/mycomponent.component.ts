import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  elements: any = [
    {id: 1, first: 'Mark', last: 'Kendal', handle: '@km'},
    {id: 2, first: 'Eden', last: 'hazard', handle: '@eh'},
    {id: 3, first: 'Kevin', last: 'Durant', handle: '@kd'}
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor() { }

  ngOnInit() {
  }

}
