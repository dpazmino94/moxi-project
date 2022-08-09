import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlap-image',
  templateUrl: './overlap-image.component.html',
  styleUrls: ['./overlap-image.component.scss']
})
export class OverlapImageComponent implements OnInit {
  @Input() imageURL: string;
  @Input() imageText: string;
  constructor() { }

  ngOnInit() {
  }

}
