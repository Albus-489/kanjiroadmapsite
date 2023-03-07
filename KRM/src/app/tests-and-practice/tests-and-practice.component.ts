import { Component, Input, OnInit } from '@angular/core';
import { IKanatoggle } from '../kanatoggle-data/ikanatoggle';
import { KanatoggleService } from '../kanatoggle-data/kanatoggle.service';

@Component({
  selector: 'app-tests-and-practice',
  templateUrl: './tests-and-practice.component.html',
  styleUrls: ['./tests-and-practice.component.scss'],
})
export class TestsAndPracticeComponent implements OnInit {
  constructor(private kanaDataService: KanatoggleService) {}

  message: boolean;
  kanaToggleInfo: IKanatoggle;

  ngOnInit(): void {
    this.kanaDataService.currentMessage.subscribe((message) => {
      this.kanaToggleInfo = message;
      this.message = this.kanaToggleInfo.translationState;
    });

    console.log(this.kanaToggleInfo);
  }

  reloadView(): void {
    console.log(this.kanaToggleInfo);
  }
  mssg: string = 'Nothing here!';
}
