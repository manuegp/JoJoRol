import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hit-points',
  templateUrl: './hit-points.component.html',
  styleUrls: ['./hit-points.component.css'],
})
export class HitPointsComponent implements OnInit {
  hitPoints: any;

  constructor() {
    this.hitPoints = 5;
  }

  incrementarHP() {
    if (this.hitPoints == '☠') {
      this.hitPoints = 1;
    } else {
      this.hitPoints++;
    }
  }

  decrementarHP() {
    if (this.hitPoints < 1) {
      this.hitPoints = '☠';
    } else if (this.hitPoints == '☠') {
    } else {
      this.hitPoints--;
    }
  }

  
  ngOnInit(): void {}
}
