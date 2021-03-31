import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DespertadorService } from '../../../servicios/despertador.service';


@Component({
  selector: 'app-despertador-modificar',
  templateUrl: './despertador-modificar.component.html',
  styles: [
  ]
})
export class DespertadorModificarComponent implements OnInit {

  id:any;

  constructor(private _activeRout: ActivatedRoute,
              private _despertadorService : DespertadorService) {

     // Capturar Ruta
     _activeRout.params.subscribe(params=>{
        this.id = params['id'];
        // console.log("Id:", this.id);
      })

  }

  ngOnInit(): void {
  }

  modificar(){
    let data={
      id : this.id,
      imagen :  ((document.getElementById("urlDespertador") as HTMLInputElement).value)
    };

    this._despertadorService.updateDespertador(data);
  }

}
