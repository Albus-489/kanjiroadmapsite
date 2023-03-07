import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { default as data } from '../Data/kanji.json';
import { IKanatoggle } from '../kanatoggle-data/ikanatoggle';
import { KanatoggleService } from '../kanatoggle-data/kanatoggle.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
})
export class A1Component implements OnInit {
  constructor(private kanatoggleService: KanatoggleService) {}

  message: string = '...';
  kanaToggleInfo: IKanatoggle;

  ngOnInit(): void {
    this.changePage(this.pageNumber); //init first page of kanji
    this.kanatoggleService.currentMessage.subscribe((message) => {
      this.kanaToggleInfo = message;
      this.message = this.kanaToggleInfo.tOff;
    });
    console.log(this.kanaToggleInfo);
  }

  // ^ SETTINGS SECTION ^
  hoverToHint: boolean = false;
  clck: string = 'click';
  hvr: string = 'hover';

  // ^ SETTINGS SECTION ^

  // * kana and translation toggle

  // * kana and translation toggle

  //  ^ PAGINATOR ^ ******
  changePage(n: number) {
    this.kanjiArr = data.filter((item, index) => {
      return (
        index < n * this.numOfElem &&
        index > n * this.numOfElem - this.numOfElem - 1
      );
    });
  }

  prevPage() {
    this.pageNumber -= 1;
    this.changePage(this.pageNumber);
  }

  nextPage() {
    this.pageNumber += 1;
    this.changePage(this.pageNumber);
  }

  prevDis() {
    if (this.pageNumber !== 1) {
      return false;
    } else {
      return true;
    }
  }

  nextDis() {
    if (this.pageNumber !== 2) {
      return false;
    } else {
      return true;
    }
  }

  kanjiArr: any; // data from json (look at imports)
  pageNumber: any = 1;
  numOfElem: number = 40; //number of elements on page
  // ^ PAGINATOR ^ ******
}
