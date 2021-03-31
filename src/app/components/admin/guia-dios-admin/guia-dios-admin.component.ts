import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GuiaDiosService } from '../../../servicios/guia-dios.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-guia-dios-admin',
  templateUrl: './guia-dios-admin.component.html',
  styles: [
  ]
})
export class GuiaDiosAdminComponent implements OnInit {

  resultadoPeticion :any;

  constructor( private _guiaDiosService : GuiaDiosService,
              private _router : Router,
              public dom : DomSanitizer) {
                this.resultadoPeticion = this._guiaDiosService.resultadoPeticion;
                // this.getAll().then(()=>this.resultadoPeticion = this._usuariosService.resultadoPeticion);
                this.getAll();

  }

  ngOnInit(): void {

  }

  getAll = async()=>{
    await this._guiaDiosService.getAllGuiaDios().then(()=>{
      this.resultadoPeticion = this._guiaDiosService.resultadoPeticion
      //console.log(this.resultadoPeticion);
    })

  }

  createGuia(){

    let contador = 0;


      for(let item of this.resultadoPeticion){
        contador ++
      }

      if(contador <3){
        this._router.navigate(['/guiaDios-create'])
      }else{
        alert("Supera el maximo permitido")
      }
  }

  async elimiarGuia(id){

    var opcion = confirm("Esta segura que desa eliminarlo?");

    if(opcion == true){
      this.resultadoPeticion = this._guiaDiosService.deleteGuiaDios(id)
      // console.log(this.resultadoPeticion);

      this._router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
      this._router.navigate(['/guiaDios-admin']));

    }

  }

  modificarGuia(id){
    this._router.navigate(['/guiaDios-modificar',id])
  }

}
