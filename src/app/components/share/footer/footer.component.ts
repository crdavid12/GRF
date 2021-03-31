import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  resultFecha :any

  constructor() {
    this.fecha();
   }

  ngOnInit(): void {
  }

  fecha(){
    let anio = new Date();
    this.resultFecha = anio.getFullYear();
  }

}
