import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any>=[
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":1200
    },
    {
      "Id":2,
      "Name":"Ambani House",
      "Type":"House",
      "Price":1200
    },
    {
      "Id":3,
      "Name":"White House",
      "Type":"House",
      "Price":1200
    },
    {
      "Id":4,
      "Name":"PM House",
      "Type":"House",
      "Price":1200
    },
    {
      "Id":5,
      "Name":"CM House",
      "Type":"House",
      "Price":1200
    },

]

  constructor() { }

  ngOnInit() {
  }

}
