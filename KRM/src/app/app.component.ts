import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KRM';

  ngOnInit(): void {
    this.audio.src = './assets/music.mp3'
    this.audio.load()
  }

  isActive: boolean = false;
  audio = new Audio();

  musicToggle(): void {
    this.isActive = !this.isActive
    if (this.isActive) {
      this.audio.play()
    }
    else {
      this.audio.pause()
      this.audio.currentTime = 0
    }
  }
}
