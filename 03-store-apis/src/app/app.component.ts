import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showImage = true;
  title = 'store';
  text =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor() {}

  ngOnInit(): void {}

  onLoaded(img: string) {
    console.log(img);
    console.log('event sent child to parent');
  }

  toogleImage() {
    this.showImage = !this.showImage;
  }
}
