import { Component, OnInit } from '@angular/core';
import { ReflexionesService } from '../../servicios/reflexiones.service';


import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reflexiones',
  templateUrl: './reflexiones.component.html',
  styles: [
  ]
})
export class ReflexionesComponent implements OnInit {

  resultadoPeticion :any;

  constructor(private _reflexionesServices : ReflexionesService,
              public dom : DomSanitizer) {
      this.getPublicacion();
   }

  ngOnInit(): void {
  }

  async getPublicacion(){
    await this._reflexionesServices.getPublicacionReflexiones().then(()=>{
      this.resultadoPeticion = this._reflexionesServices.resultadoPeticion
      // console.log(this.resultadoPeticion);
    })
  }

}

