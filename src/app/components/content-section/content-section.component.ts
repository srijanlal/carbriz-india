import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent {
  @ViewChild('video1') video1: any; // Use 'any' or HTMLVideoElement if Angular version is below 8
  @ViewChild('video2') video2: any;

  featuredVideo1: string ='../../../assets/videos/featured-video1.mp4'
  featuredVideo2: string ='../../../assets/videos/featured-video2.mp4'

  constructor(){

  }

  // ngAfterViewInit() {
  //   // this.playVideoOnLoad(this.video1.nativeElement);
  // }

  playVideoOnLoad(video: HTMLVideoElement): void {
    video.play();
  }


  toggleVideoPlayback(video: HTMLVideoElement): void {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }


}
