import { Component, OnInit } from '@angular/core';
import { ReflexionesService } from '../../../servicios/reflexiones.service';


@Component({
  selector: 'app-reflexiones-create',
  templateUrl: './reflexiones-create.component.html',
  styles: [
  ]
})
export class ReflexionesCreateComponent implements OnInit {

  constructor(private _reflexionesServices : ReflexionesService) { }

  ngOnInit(): void {
  }

  postReflexiones(){
    const datos = {
      titulo :  ((document.getElementById("tituloGuiaDios") as HTMLInputElement).value),
      url : ((document.getElementById("urlGuiaDios") as HTMLInputElement).value),
      descripcion : ((document.getElementById("DescripcionGuiaDios") as HTMLInputElement).value)
    }


    this._reflexionesServices.postReflexiones(datos);

  }


}
