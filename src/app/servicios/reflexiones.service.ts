import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReflexionesService {

  resultadoPeticion: any;
  ruta = "https://grfbackend.herokuapp.com";


  constructor(private _http: HttpClient,
              private _router : Router) { }

  async getAllReflexiones(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/reflexiones/getAll", {headers, observe:'response'})
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

  getIdReflexiones(id){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + `/api/v1/reflexiones/getId/${id}`, {headers, observe:'response'})
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

  getPublicacionReflexiones(){
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/reflexiones/getPublicacion", {headers, observe:'response'})
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

  postReflexiones(datos){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    this._http.post(this.ruta + "/api/v1/reflexiones/create",{
      url: datos.url,
      titulo: datos.titulo,
      descripcion: datos.descripcion
    }, {headers, observe:'response'})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log("resutado api= ", this.resultadoPeticion);
      // window.location.reload();
      // this._router.navigate(['/guiaDios-admin']).then (() => document.defaultView.location.reload());
      this._router.navigate(['/reflexiones-admin'])
    });
  }

  deleteReflexiones(id){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.delete(this.ruta + `/api/v1/reflexiones/delete/${id}`, {headers, observe:'response'})
      .subscribe(data => {
          try {
            this.resultadoPeticion = data;
            this._router.navigate(['/reflexiones-admin']);
            resolve(this.resultadoPeticion)
          } catch (error) {

          }


    })
    });
  }

  updateReflexiones(id, data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    // console.log(data);

    return new Promise((resolve, reject)=>{
      // this._http.post(`/api/v1/guiaDios/update/${id}`, data,  {headers})
      this._http.post(this.ruta + `/api/v1/reflexiones/update`, data,  {headers})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data;
          this._router.navigate(['/reflexiones-admin']);
        } catch (error) {
          resolve(error)
        }
    })

    });

  }

}
