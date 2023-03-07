import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IKanatoggle } from './ikanatoggle';

@Injectable({
  providedIn: 'root',
})
export class KanatoggleService {
  constructor() {}

  private messageSource = new BehaviorSubject<IKanatoggle>({
    translationState: true,
    katakana: true,
    hiragana: true,
    tOff: 'Translation is off',
    hOff: 'Hiragana is off',
    kOff: 'Katakana is off',
  });
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: IKanatoggle) {
    this.messageSource.next(message);
  }
}
