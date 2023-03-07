import { Component, OnInit } from '@angular/core';
import { default as data } from '../Data/kanji3.json';
import { IKanatoggle } from '../kanatoggle-data/ikanatoggle';
import { KanatoggleService } from '../kanatoggle-data/kanatoggle.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.scss'],
})
export class A2Component implements OnInit {
  constructor(private kanatoggleService: KanatoggleService) {}

  kanaToggleInfo: IKanatoggle;

  ngOnInit(): void {
    this.changePage(this.pageNumber); //init first page of kanji
    this.kanatoggleService.currentMessage.subscribe((message) => {
      this.kanaToggleInfo = message;
    });
    console.log(this.kanaToggleInfo);
    this.changePage(this.pageNumber); //init first page of kanji
  }

  // * kana and translation toggle

  // * kana and translation toggle

  // ^ PAGINATOR ^ ******

  changePage(n: number) {
    this.kanjiArr = data.filter((item, index) => {
      return (
        index < n * this.numOfElem &&
        index > n * this.numOfElem - this.numOfElem - 1
      );
    });
  }

  prevPage() {
    if (this.pageNumber === 1) {
      this.pageNumber = 5;
      this.changePage(this.pageNumber);
    } else {
      this.pageNumber -= 1;
      this.changePage(this.pageNumber);
    }
  }

  nextPage() {
    if (this.pageNumber === 5) {
      this.pageNumber = 1;
      this.changePage(this.pageNumber);
    } else {
      this.pageNumber += 1;
      this.changePage(this.pageNumber);
    }
  }

  kanjiArr: any; // data from json (look at imports)
  pageNumber: any = 1;
  numOfElem: number = 40; //number of elements on page

  // ^ PAGINATOR ^ ******
}
