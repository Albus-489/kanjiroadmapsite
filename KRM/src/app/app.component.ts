import { Component, Input } from '@angular/core';
import { KanatoggleService } from './kanatoggle-data/kanatoggle.service';
import { IKanatoggle } from './kanatoggle-data/ikanatoggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private kanaToggleService: KanatoggleService) {}

  maintstmessage: string = 'Hello from Main!';

  sendMessage() {
    this.kanaToggleService.changeMessage(this.kanaToggleInfo);
  }
  title = 'KRM';

  // * kana and translation toggle
  translationState: boolean = true;
  katakana: boolean = true;
  hiragana: boolean = true;
  tOff = 'Translation is off';
  hOff = 'Hiragana is off';
  kOff = 'Katakana is off';

  kanaToggleInfo: IKanatoggle = {
    translationState: true,
    katakana: true,
    hiragana: true,
    tOff: 'Translation is off',
    hOff: 'Hiragana is off',
    kOff: 'Katakana is off',
  };

  kanaToggle(n: number) {
    switch (n) {
      case 1:
        this.kanaToggleInfo.translationState =
          !this.kanaToggleInfo.translationState;
        this.sendMessage();
        break;

      case 2:
        this.kanaToggleInfo.katakana = !this.kanaToggleInfo.katakana;
        this.sendMessage();
        break;

      case 3:
        this.kanaToggleInfo.hiragana = !this.kanaToggleInfo.hiragana;
        this.sendMessage();
        break;

      default:
        break;
    }
  }
  // * kana and translation toggle
  hoverToHint: boolean = false;
  changeSet() {
    this.hoverToHint = !this.hoverToHint;
  }

  ngOnInit(): void {
    this.audio.src = './assets/music.mp3';
    this.audio.load();
  }

  isActive: boolean = false;
  audio = new Audio();

  musicToggle(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
