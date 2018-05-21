import { Component, OnInit } from '@angular/core';
import {SliderItemComponent} from '../slider-item/slider-item.component';
import {SLIDES} from './slider.constant';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  slideIndex = 1;
  slideList = SLIDES;

  constructor() { }

  ngOnInit() {
    this.showDivs(this.slideIndex);
    this.plusDivs(1);
    this.plusDivs(-1);
  }


  plusDivs(n: number) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(indexNumber: number) {
    let i;
    const element = [].slice.call(document.getElementsByClassName('slider-item-container'));
    if (indexNumber > element.length) { this.slideIndex = 1; }
    if (indexNumber < 1) { this.slideIndex = element.length; }
    for (i = 0; i < element.length; i++) {
      element[i].style.display = 'none';
    }
    element[this.slideIndex - 1].style.display = 'block';
  }

}
