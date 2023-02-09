import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { default as data } from "../Data/kanji.json"

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss']
})
export class A1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changePage(this.pageNumber) //init first page of kanji
  }

  // ^ SETTINGS SECTION ^
  hoverToHint:boolean = false
  clck:string = 'click'
  hvr:string = 'hover'

  changeSet(){
    this.hoverToHint = !this.hoverToHint
  }


  // ^ SETTINGS SECTION ^

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

  //  ^ PAGINATOR ^ ******
  changePage(n: number) {

    this.kanjiArr = data.filter((item, index) => {
      return (
        index < n * this.numOfElem && index > (n * this.numOfElem - this.numOfElem) - 1
      )
    })
  }

  prevPage() {
    this.pageNumber -= 1;
    this.changePage(this.pageNumber)
  }

  nextPage() {
    this.pageNumber += 1;
    this.changePage(this.pageNumber)
  }

  prevDis() {
    if (this.pageNumber !== 1) { return false }
    else { return true }
  }

  nextDis() {
    if (this.pageNumber !== 2) { return false }
    else { return true }
  }

  kanjiArr: any; // data from json (look at imports)
  pageNumber: any = 1;
  numOfElem: number = 40 //number of elements on page
  // ^ PAGINATOR ^ ******


}


