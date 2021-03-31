import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReflexionesService } from '../../../servicios/reflexiones.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-reflexiones-admin',
  templateUrl: './reflexiones-admin.component.html'
})
export class ReflexionesAdminComponent implements OnInit {

  resultadoPeticion :any;

  constructor( private _reflexionesService : ReflexionesService,
              private _router : Router,
              public dom : DomSanitizer) {
                this.resultadoPeticion = this._reflexionesService.resultadoPeticion;
                // this.getAll().then(()=>this.resultadoPeticion = this._usuariosService.resultadoPeticion);
                this.getAllReflexiones();

  }

  ngOnInit(): void {

  }

  getAllReflexiones = async()=>{
    await this._reflexionesService.getAllReflexiones().then(()=>{
      this.resultadoPeticion = this._reflexionesService.resultadoPeticion
      // console.log(this.resultadoPeticion);
    })

  }

  createReflexion(){

    let contador = 0;


      for(let item of this.resultadoPeticion){
        contador ++
      }

      if(contador <3){
        this._router.navigate(['/reflexiones-create'])
      }else{
        alert("Supera el maximo permitido")
      }
  }

  async elimiarReflexion(id){

    var opcion = confirm("Esta segura que desa eliminarlo?");

    if(opcion == true){
      this.resultadoPeticion = this._reflexionesService.deleteReflexiones(id)
      console.log(this.resultadoPeticion);
    }
  }

  modificarReflexion(id){
    this._router.navigate(['/reflexiones-modificar',id])
  }

}


