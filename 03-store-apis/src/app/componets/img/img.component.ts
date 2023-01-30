import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input('img')
  set changeImage(newImg: string) {
    this.img = newImg;
    console.log('chnage just img => ', this.img);
  }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';
  counter: number = 0;
  counterFn: any;
  // number | undefined

  constructor() {
    // before render
    console.log('constructor ', 'imgValue  =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before render
    // listen changes on inputs
    console.log('ngOnChanges', this.img);

    console.log(changes, 'changes');
  }

  ngOnInit(): void {
    // before render
    // fetch - asunc
    // once time

    console.log('ngOnInit', this.img);

    // this.counterFn = setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter', this.counter);
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // hanldre children
    console.log('afterviewinit');
  }

  ngOnDestroy(): void {
    // delete component
    console.log('ngOnDestroy');
    // clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('child event');
    this.loaded.emit(this.img);
  }
}
