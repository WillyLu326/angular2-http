import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'app works!';

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('on change');
  }

  ngOnInit() {
    console.log('on init');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }
}
