import { Component, OnInit } from '@angular/core';
import { default as data } from '../Data/kanji1.json';
import { IKanatoggle } from '../kanatoggle-data/ikanatoggle';
import { KanatoggleService } from '../kanatoggle-data/kanatoggle.service';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.scss'],
})
export class B2Component implements OnInit {
  constructor(private kanatoggleService: KanatoggleService) {}

  kanaToggleInfo: IKanatoggle;
  ngOnInit(): void {
    this.changePage(this.pageNumber); //init first page of kanji
    this.kanatoggleService.currentMessage.subscribe((message) => {
      this.kanaToggleInfo = message;
    });
    this.changePage(this.pageNumber); //init first page of kanji
  }

  // ^ PAGINATOR ^ ******

  changePage(n: number) {
    if (n > 32 || n < 1) {
      n = 1;
      this.pageNumber = 1;
    }
    this.kanjiArr = data.filter((item, index) => {
      return (
        index < n * this.numOfElem &&
        index > n * this.numOfElem - this.numOfElem - 1
      );
    });
  }

  prevPage() {
    if (this.pageNumber === 1) {
      this.pageNumber = 32;
      this.changePage(this.pageNumber);
    } else {
      this.pageNumber -= 1;
      this.changePage(this.pageNumber);
    }
  }

  nextPage() {
    if (this.pageNumber === 32) {
      this.pageNumber = 1;
      this.changePage(this.pageNumber);
    } else {
      this.pageNumber++;
      this.changePage(this.pageNumber);
    }
  }

  kanjiArr: any; // data from json (look at imports)
  pageNumber: number = 1;
  numOfElem: number = 40; //number of elements on page

  // ^ PAGINATOR ^ ******
}
