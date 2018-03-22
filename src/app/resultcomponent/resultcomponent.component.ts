import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero-form/hero';
@Component({
  selector: 'app-resultcomponent',
  templateUrl: './resultcomponent.component.html',
  styleUrls: ['./resultcomponent.component.css']
})
export class ResultcomponentComponent implements OnInit {
  @Input() result: Hero;
  public model;
  constructor() { }
  ngOnInit() {
    console.log('sssss', this.result)
    this.model = this.result;
  }

}
