import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  ratingsData: any;

  constructor() {
    this.ratingsData = [
      {
        stars: 1,
        votes: 20
      },
      {
        stars: 2,
        votes: 45
      },
      {
        stars: 3,
        votes: 60
      },
      {
        stars: 4,
        votes: 78
      },
      {
        stars: 5,
        votes: 22
      }
    ]
  }

  ngOnInit() {
  }

}
