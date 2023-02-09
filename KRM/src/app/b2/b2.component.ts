import { Component, OnInit } from '@angular/core';
import {default as data} from "../Data/kanji1.json"

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.scss']
})
export class B2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changePage(this.pageNumber) //init first page of kanji
  }

  // * kana and translation toggle
  translationState: boolean = true;
  katakana: boolean = true;
  hiragana: boolean = true;
  tOff = 'Translation is off'
  hOff = 'Hiragana is off'
  kOff = 'Katakana is off'


  kanaToggle(n: number) {

    switch (n) {
      case 1:
        this.translationState = !this.translationState
        break;

      case 2:
        this.katakana = !this.katakana
        break;

      case 3:
        this.hiragana = !this.hiragana
        break;

      default:
        break;
    }
  }
  // * kana and translation toggle

  // ^ PAGINATOR ^ ******

  changePage(n:number) {

    if(n > 32 || n < 1){
      n = 1
      this.pageNumber=1
    }
    this.kanjiArr = data.filter((item, index) => {
      return(
        index < n * this.numOfElem && index > (n*this.numOfElem - this.numOfElem) - 1
      )
    })
  }

  prevPage(){
    if(this.pageNumber === 1){
      this.pageNumber = 32
      this.changePage(this.pageNumber)
    }
    else{
      this.pageNumber-=1;
      this.changePage(this.pageNumber)
    }
  }

  nextPage(){

    if(this.pageNumber === 32){
      this.pageNumber = 1
      this.changePage(this.pageNumber)
    }
    else{
      this.pageNumber++;
      this.changePage(this.pageNumber)
    }
  }

  kanjiArr:any // data from json (look at imports)
  pageNumber:number = 1;
  numOfElem:number = 40 //number of elements on page

  // ^ PAGINATOR ^ ******


}


