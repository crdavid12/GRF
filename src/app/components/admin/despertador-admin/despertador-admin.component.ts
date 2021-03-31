import { Component, OnInit } from '@angular/core';
import { DespertadorService } from '../../../servicios/despertador.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despertador-admin',
  templateUrl: './despertador-admin.component.html'
})
export class DespertadorAdminComponent implements OnInit {
  resultadoPeticion :any;
  constructor( private _despertadorSerice : DespertadorService,
               public dom : DomSanitizer,
               private _router : Router,) {
                this.getAllReflexiones();
                }

  ngOnInit(): void {
  }

  getAllReflexiones = async()=>{
    await this._despertadorSerice.getAllDespertador().then(()=>{
      this.resultadoPeticion = this._despertadorSerice.resultadoPeticion
      // console.log(this.resultadoPeticion);
    })

  }

  createDespertador(){
    this._router.navigate(['/despertador-create'])
  }

  modificar(id){
    // console.log("ID: ",id);

    this._router.navigate(['/despertador-modificar',id])
  }
}
