import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReflexionesService } from '../../../servicios/reflexiones.service';


@Component({
  selector: 'app-reflexiones-modificar',
  templateUrl: './reflexiones-modificar.component.html',
  styles: [
  ]
})
export class ReflexionesModificarComponent implements OnInit {

  resultadoPeticion:any;

  constructor(private _activeRout: ActivatedRoute,
              private _reflexionesService : ReflexionesService) {
    // Capturar Ruta
    _activeRout.params.subscribe(params=>{
      _reflexionesService.getIdReflexiones(params['id']).then(()=>{
        this.resultadoPeticion = this._reflexionesService.resultadoPeticion;
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
      publicacion : ((document.getElementById("checkPublicacionReflexiones") as HTMLInputElement).checked)
    };
    this._reflexionesService.updateReflexiones(id,data)
  }

}

