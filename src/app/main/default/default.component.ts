import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  standalone:true,
  imports:[RouterOutlet]
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
