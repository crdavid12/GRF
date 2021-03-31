import { Component, OnInit } from '@angular/core';
import { GuiaDiosService } from '../../servicios/guia-dios.service';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-guia-de-dios',
  templateUrl: './guia-de-dios.component.html'
})
export class GuiaDeDiosComponent implements OnInit {

  resultadoPeticion :any;

  constructor(private _guiaDiosService : GuiaDiosService,
              public dom : DomSanitizer) {
      this.getPublicacion();
   }

  ngOnInit(): void {
  }

  async getPublicacion(){
    await this._guiaDiosService.getPublicacionGuiaDios().then(()=>{
      this.resultadoPeticion = this._guiaDiosService.resultadoPeticion
      // console.log(this.resultadoPeticion);
    })
  }

}
