import { Component, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';


  public prvniCislo:number;
  public druheCislo:number;
  public vysledek;

  scitani() {
    this.vysledek = this.prvniCislo + this.druheCislo;
  }

  odcitani() {
    this.vysledek = this.prvniCislo - this.druheCislo;
  }

  nasobeni() {
    this.vysledek = this.prvniCislo * this.druheCislo;
  }

  deleni() {
    this.vysledek = this.prvniCislo / this.druheCislo;
    if(this.prvniCislo == 0 || this.druheCislo == 0) {
      this.vysledek = "Nulou se dělit nedá";
    }
  }

  
}
