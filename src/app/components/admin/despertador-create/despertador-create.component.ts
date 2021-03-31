import { Component, OnInit } from '@angular/core';
import { DespertadorService } from '../../../servicios/despertador.service';


@Component({
  selector: 'app-despertador-create',
  templateUrl: './despertador-create.component.html',
  styles: [
  ]
})
export class DespertadorCreateComponent implements OnInit {

  constructor(private _despertadorService : DespertadorService) {

  }

  ngOnInit(): void {
  }

  postDespertador(){
    let datos={
      imagen : ((document.getElementById("urlDespertador") as HTMLInputElement).value)
    }

    this._despertadorService.postDespertador(datos);

  }

}
