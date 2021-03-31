import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuiaDiosService } from '../../../servicios/guia-dios.service';




@Component({
  selector: 'app-guia-dios-modificar',
  templateUrl: './guia-dios-modificar.component.html',
  styles: [
  ]
})
export class GuiaDiosModificarComponent implements OnInit {

  resultadoPeticion:any;

  constructor(private _activeRout: ActivatedRoute,
              private _guiaDiosService : GuiaDiosService) {
    // Capturar Ruta
    _activeRout.params.subscribe(params=>{
      _guiaDiosService.getIdGuiaDios(params['id']).then(()=>{
        this.resultadoPeticion = this._guiaDiosService.resultadoPeticion;
      })
    })
  }

  ngOnInit(): void {
  }

  modificar(id){
    let data={
      _id : id,
      titulo :  ((document.getElementById("tituloGuiaDios") as HTMLInputElement).value),
      url : ((document.getElementById("urlGuiaDios") as HTMLInputElement).value),
      descripcion : ((document.getElementById("DescripcionGuiaDios") as HTMLInputElement).value),
      publicacion : ((document.getElementById("checkPublicacion") as HTMLInputElement).checked)
    };

    this._guiaDiosService.updateGuiaDios(id,data)
  }

}
