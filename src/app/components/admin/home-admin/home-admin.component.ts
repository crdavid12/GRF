import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html'
})
export class HomeAdminComponent implements OnInit {

  rolAdmin:boolean;

  constructor( private _usuariosService : UsuariosService
  ) {
    this.rolAdmin = _usuariosService.rolAdmin;
    //console.log("rolAdmin= ", this.rolAdmin)
  }

  ngOnInit(): void {
  }

}
