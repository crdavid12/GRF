import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { DespertadorService } from '../../../servicios/despertador.service';

import { TokenServiceService } from '../../../servicios/token-service.service';
import { DomSanitizer } from '@angular/platform-browser';




declare let $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  errordatos:boolean;
  capturaIngreso={
    usuarioLogin:"",
    contrasena:""
  };
  rolAdmin:boolean;
  token;
  capturaDatos:any;
  isLoginOK: any=true;
  resultadoPeticion : any;
  video2:any;
  momento2:any;

  constructor(  private _router : Router,
                private _usuariosServices : UsuariosService,
                private _despertadorServices : DespertadorService,
                private _token : TokenServiceService,
                public dom : DomSanitizer) {
    this.errordatos = false
    this.rolAdmin = _usuariosServices.rolAdmin;
    this.getVideo();
  }

  ngOnInit(): void {
  }

  modalInicioSesion(){
    //al ingresar al modal de ingreso, selecciona automaticamente el input usuario
    $(document).ready(() => {
      $('#modalInicioSesion').on('shown.bs.modal', () => {
        $('#usuarioLogin').trigger('focus');
      });
    });
  }

  ingresoNg(f){
    console.log("captura de ingreso= ", this.capturaIngreso);
  }
/*
  ingresoSesion(){
    const user = {
      password : this.capturaIngreso.contrasena,
      usuario : this.capturaIngreso.usuarioLogin
    }

    const checkLogin = async (user) =>{
      try{
        //captura token del servicio
        this.token = await this._usuariosServices.login(user);
        console.log("TOKEN componente= "+ this.token);
        //cerrar modal
        $('#modalInicioSesion').modal('hide');
        //navegamos al modulo admin
        this._router.navigate(['home-admin']);
        //Borrar text del login
        this.limpiarMensaje();
        //Cambiamos a true el rol admin para modificar el navbar
        this.rolAdmin =  this._usuariosServices.cambioRolAdmin();

      }catch(error){
        console.log("error");
      }
    }
    checkLogin(user);


  }*/

  async ingresoSesion(){
    const user = {
      password : this.capturaIngreso.contrasena,
      usuario : this.capturaIngreso.usuarioLogin
    }

    const checkLogin = async (user) =>{
      try{
        //captura token del servicio
        await this._usuariosServices.login(user);
        this.isLoginOK = this._usuariosServices.isLoginOK;
        console.log(this.isLoginOK);
          //cerrar modal
          $('#modalInicioSesion').modal('hide');
          //navegamos al modulo admin
          this._router.navigate(['home-admin']);
          //Borrar text del login
          this.limpiarMensaje();
          //Cambiamos a true el rol admin para modificar el navbar
          this.rolAdmin =  this._usuariosServices.cambioRolAdmin();

      }catch(error){
        this.isLoginOK = this._usuariosServices.isLoginOK;
        console.log(this.isLoginOK);
      }
    }
    await checkLogin(user);
  }

  getUser(){
    this._usuariosServices.getHome();
    this.capturaDatos = this._usuariosServices.resultadoPeticion;
    console.log("Resultado usuarios= ", this.capturaDatos);
  }



  cancelarLogin(){
    $('#modalInicioSesion').modal('hide');
    this.limpiarMensaje();
    this.errordatos=false;
    this.isLoginOK = true
  }

  cerrarSesion(){
    this.cancelarCerrarSesion();
    this._router.navigate(['home']);
    this._usuariosServices.cambioRolAdmin();
    this.rolAdmin =this._usuariosServices.rolAdmin;
    console.log("RolAdmin_Navbar= ", this.rolAdmin)
  }

  cancelarCerrarSesion(){
    $('#ModalCerrarSesion').modal('hide');
    this.isLoginOK = true
  }

  cerrarDesperador(){
    $('#carouselExampleControls').bind('slide.bs.carouselExampleControls', function (e) {
      let elemento = $('#carouselExampleControls .item.active video').first();
      if (elemento.prop("tagName") == "VIDEO") {
        elemento.get(0).pause();
      }
   });

   $('#exampleModals').modal('hide');
  }

  limpiarMensaje(){
    this.capturaIngreso.usuarioLogin="";
    this.capturaIngreso.contrasena="";
  }

  async getVideo(){
    await this._despertadorServices.getAllDespertador().then(()=>{
      this.resultadoPeticion = this._despertadorServices.resultadoPeticion
      //Se usa la variable video2 para evitar errores en su ejecucion
      this.video2 = this._despertadorServices.resultadoPeticion[2].imagen;
      this.momento2 = this._despertadorServices.resultadoPeticion[2].momento;
    })
  }

  detenerVideo(){
    $('#carouselExampleControls').bind('slide.bs.carouselExampleControls', function (e) {
      let elemento = $('#carouselExampleControls .item.active video').first();
      if (elemento.prop("tagName") == "VIDEO") {
        elemento.get(0).pause();
      }
   });
  }
}
