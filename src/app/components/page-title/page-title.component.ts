import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  
})
export class PageTitleComponent implements OnInit {

  @Input()
  title : string = "";

  @Input()
  subTitle : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
