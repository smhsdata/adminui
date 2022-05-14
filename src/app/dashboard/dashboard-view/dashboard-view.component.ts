import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  datas = [
    {
      "id": 1,
      "base": "Layout"
    },
    {
      "id": 2,
      "base": "Cabinet core Material"
    },
    {
      "id": 3,
      "base": "Shutter core Material"
    },
    {
      "id": 4,
      "base": "Cabinet sizing"
    }
  ]

  layout = [
    {
      "id": 1,
      "name": "Kitchen",
      "price":"NA"
    },
    {
      "id": 2,
      "name": "Bedroom",
      "price":"NA"
    },
    {
      "id": 3,
      "name": "Living Room",
      "price":"NA"
    },
  ]
  scm = [
    {
      "id": 1,
      "name": "laminate - HGL or MR",
      "price":"150"
    },
    {
      "id": 2,
      "name": "laminate - SF",
      "price":"3300"
    },
    {
      "id": 3,
      "name": "laminate - Texture",
      "price":"200"
    },
    {
      "id": 4,
      "name": "Arylic - 1mm",
      "price":"21100"
    },
    {
      "id": 5,
      "name": "Arylic - 2mm",
      "price":"200"
    },
    {
      "id": 6,
      "name": "Arylic - matt",
      "price":"200"
    },
    {
      "id": 7,
      "name": "PU Finish Matt",
      "price":"200"
    },
    {
      "id": 8,
      "name": "PU Finish Glossy",
      "price":"200"
    },
    {
      "id": 9,
      "name": "PU Finish 5 Panel",
      "price":"200"
    },
    {
      "id": 10,
      "name": "Veneer Matt",
      "price":"200"
    },
    {
      "id": 11,
      "name": "Venner Glossy",
      "price":"200"
    },
    {
      "id": 12,
      "name": "Lacquer - Plain Glass",
      "price":"200"
    },
    {
      "id": 13,
      "name": "Lacquer - Tinted Glass",
      "price":"200"
    },
    {
      "id": 14,
      "name": "Lacquer - Mirror",
      "price":"200"
    },
  ]
  cabinet_sizing = [
    {
      "id": 1,
      "name": "550*560*700",
      "price":"NA"
    },
    {
      "id": 2,
      "name": "600*560*700",
      "price":"NA"
    },
    {
      "id": 3,
      "name": "450*560*700",
      "price":"NA"
    },
    {
      "id": 4,
      "name": "1100*560*700",
      "price":"NA"
    }
  ]

}
