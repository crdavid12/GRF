import { Component, OnInit } from '@angular/core';
import { GuiaDiosService } from '../../../servicios/guia-dios.service';

@Component({
  selector: 'app-guia-dios-create',
  templateUrl: './guia-dios-create.component.html',
  styles: [
  ]
})
export class GuiaDiosCreateComponent implements OnInit {

  constructor(private _guiaDiosService : GuiaDiosService) { }

  ngOnInit(): void {
  }

  postGuiaDios(){

    const datos = {
      titulo :  ((document.getElementById("tituloGuiaDios") as HTMLInputElement).value),
      url : ((document.getElementById("urlGuiaDios") as HTMLInputElement).value),
      descripcion : ((document.getElementById("DescripcionGuiaDios") as HTMLInputElement).value)
    }


    this._guiaDiosService.postGuiaDios(datos);

  }


}
