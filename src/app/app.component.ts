import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `my-project`;
  vysledek: any = '';
  nula() {
    this.vysledek = this.vysledek + 0;
  }
  jedna() {
    this.vysledek = this.vysledek + 1;
  }
  dva() {
    this.vysledek = this.vysledek + 2;
  }
  tri() {
    this.vysledek = this.vysledek + 3;
  }
  ctyri() {
    this.vysledek = this.vysledek + 4;
  }
  pet() {
    this.vysledek = this.vysledek + 5;
  }
  sest() {
    this.vysledek = this.vysledek + 6;
  }
  sedm() {
    this.vysledek = this.vysledek +  7;
  }
  osm() {
    this.vysledek = this.vysledek +  8;
  }
  devet() {
    this.vysledek = this.vysledek +  9;
  }
  plus() {
    this.vysledek = this.vysledek +  '+';
  }
  minus() {
    this.vysledek = this.vysledek +  '-';
  }
  krat() {
    this.vysledek = this.vysledek +  '*';
  }
  deleno() {
    this.vysledek = this.vysledek +  '/';
  }
  ac() {
    this.vysledek = '';
  }

  vypocet() {
    this.vysledek = eval(this.vysledek);
  }
}