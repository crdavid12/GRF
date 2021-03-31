import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Prueba } from '../interfaces/prueba';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  rolAdmin:boolean
  resultadoPeticion : any;
  token : string;
  isLoginOK:Boolean;
  postparam= {
      id: 6,
      video1: null,
      video2: null,
      foto1: null,
      foto2: null,
      foto3: null,
      titulo_biblico: null,
      descripcion: null,
      imagen: null,
      hablemos: null,
      apoyanos: null
  };


  constructor( private _http: HttpClient,
              private _router : Router) {
    this.rolAdmin=false;
    this.resultadoPeticion = [];
    // console.log("rolAdmin= ", this.rolAdmin)
  }

  cambioRolAdmin(){
    this.rolAdmin = !this.rolAdmin
    return this.rolAdmin;
  }

  estadoRol(){
    this.rolAdmin;
  }

  async login (user:any){
    // Enviar parametros al header  application/x-www-form-urlencoded
    // const parametros = new HttpParams()
    //   .set('password',user.password)
    //   .set('usuario', user.usuario);


    let headers = new HttpHeaders().set("Content-Type", "application/json")
                                    // .set("Authorization","Bearer" + localStorage.getItem("token"));

      // await this._http.post("/api/v1/users/login",{
      //   password: user.password,
      //   nombre: user.usuario
      // }, {headers, observe:'response'})
      // .subscribe(data => {
      //   this.resultadoPeticion = data.body
      //   console.log(this.resultadoPeticion);
      //   return this.resultadoPeticion;

      // });

      // return new Promise((resolve, reject)=>{
      //     //Almacenamiento del Token -- Necesario observe:"response" para acceder a todo el data
      //     try{
      //       this._http.post("/api/v1/users/login",{
      //         password: user.password,
      //         nombre: user.usuario
      //       }, {headers, observe:'response'})
      //       .subscribe(data => {
      //         this.resultadoPeticion = data.body;
      //         console.log("asasdada");
      //         resolve(this.resultadoPeticion)
      //       });
      //     }catch(error){
      //       this.isLoginOK = false;
      //       console.log("aaaaaaa");
      //       reject(this.isLoginOK);
      //     }

      // });

    return new Promise((resolve, reject)=>{
      this._http.post("/api/v1/users/login",{
        password: user.password,
        nombre: user.usuario
      }, {headers, observe:'response'})
      .subscribe(data => {
            this.isLoginOK =true;
            this.resultadoPeticion = data.body;
            console.log("data api=", this.resultadoPeticion)
          resolve(this.isLoginOK)
        //Almacenamiento del Token -- Necesario observe:"response" para acceder a todo el data
        // try{

        //     this.isLoginOK =true;
        //     this.resultadoPeticion = data.body;
        //     console.log("data api=", this.resultadoPeticion)
        //     // const key = data.headers.get("authorization");
        //     // this.token = key;
        //     // resolve(this.token);
        //     resolve(this.isLoginOK);

        // }catch(error){
        //   // this.isLoginOK = false;
        //   console.log(error.status);
        //   // reject(error);
        // }
      },error =>{
        this.isLoginOK=false;
        console.log(error.status);
        reject(this.isLoginOK)
        // alert("Usuario o contraseña incorrecta")
      });
    });

  }

  getHome(){

    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    this._http.get("/api/v1/users/get", {headers})
      .subscribe(data => {
        this.resultadoPeticion = data;
        console.log(data)
      })
  }


  postHome(){

    const parampost ={
      id:6,
      video1: "prueba3",
      video2: "prueba3",
      foto1:"prueba3",
      foto2:"prueba3",
      foto3:"prueba3",
      titulo_biblico:"prueba3",
      descripcion:"prueba3",
      imagen:"prueba3",
      hablemos:"prueba3",
      apoyanos:"prueba3"
    }

    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      .set("authorization", this.token);

    console.log("token post " + this.token);
    this._http.post(`/paginaPrincipal?id=${parampost.id}$video1=${parampost.video1}`,{headers})
    .subscribe(data => {
    this.resultadoPeticion = data;
    console.log(this.resultadoPeticion);
    })
  }

  deleteHome(){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      .set("authorization", this.token);

    this._http.delete("/paginaPrincipal/5", {headers})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log(data)
    })
}

  putHome(){

    const paramput ={
      id:4,
      video1: "prueba2",
      video2: "prueba2",
      foto1:"prueba2",
      foto2:"prueba2",
      foto3:"prueba2",
      titulo_biblico:"prueba2",
      descripcion:"prueba2",
      imagen:"prueba2",
      hablemos:"prueba2",
      apoyanos:"prueba2"
    }

    const headers = new HttpHeaders()
                                      .set("Content-Type", "application/json")
                                      .set("authorization", this.token);

    this._http.put<Prueba>("/paginaPrincipal/4",paramput,{headers})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log(this.resultadoPeticion);
    });
  }

  async getAllGuiaDios(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get("/api/v1/guiaDios/getAll", {headers, observe:'response'})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data.body;
          resolve(this.resultadoPeticion)
        } catch (error) {
          reject(error)
        }

      })
    });

  }

  getIdGuiaDios(id){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.get(`/api/v1/guiaDios/getId/${id}`, {headers, observe:'response'})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data.body;
          // console.log(this.resultadoPeticion);
          resolve(this.resultadoPeticion);

        } catch (error) {
          reject(error);
        }

      })
    });
  }

  getPublicacionGuiaDios(){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.get("/api/v1/guiaDios/getPublicacion", {headers, observe:'response'})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data.body;
          // console.log(this.resultadoPeticion);
          resolve(this.resultadoPeticion);

        } catch (error) {
          reject(error);
        }

      })
    });
  }

  postGuiaDios(datos){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    this._http.post("/api/v1/guiaDios/create",{
      url: datos.url,
      titulo: datos.titulo,
      descripcion: datos.descripcion
    }, {headers, observe:'response'})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log("resutado api= ", this.resultadoPeticion);
      // window.location.reload();
      // this._router.navigate(['/guiaDios-admin']).then (() => document.defaultView.location.reload());
      this._router.navigate(['/guiaDios-admin'])
    });
  }

  deleteGuiaDios(id){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.delete(`/api/v1/guiaDios/delete/${id}`, {headers, observe:'response'})
      .subscribe(data => {
          try {
            this.resultadoPeticion = data;
            this._router.navigate(['/guiaDios-admin']);
            resolve(this.resultadoPeticion)
          } catch (error) {

          }


    })
    });
  }

  updateGuiaDios(id, data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      // this._http.post(`/api/v1/guiaDios/update/${id}`, data,  {headers})
      this._http.post(`/api/v1/guiaDios/update`, data,  {headers})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data;
          this._router.navigate(['/guiaDios-admin']);
        } catch (error) {
          resolve(error)
        }
    })

    });

  }



}
