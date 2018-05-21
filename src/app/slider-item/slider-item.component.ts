import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.sass']
})
export class SliderItemComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
