import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  imagePaths: string[] = [
    '../../../assets/images/5.png',
    '../../../assets/images/6.png',
    '../../../assets/images/7.png',
    '../../../assets/images/8.png'
  ];

  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startImageRotation();
  }

  startImageRotation() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
    }, 2000);
  }
}
