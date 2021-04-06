import { DespertadorCreateComponent } from './../components/admin/despertador-create/despertador-create.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private _http: HttpClient) { }

  resultadoPeticion : any;
  apoyame: any;
  galeria: any;

  //Ruta Servicios
  ruta = "https://grfbackend.herokuapp.com"


  createVideo(data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);


    // const formData = new FormData();
    // formData.append("filename", video)

    // this._http.post("/api/v1/principal/createVideo", {formData}, {headers, observe:'response'})
    // .subscribe(data => {
    //   this.resultadoPeticion = data;
    //   console.log("resutado api= ", this.resultadoPeticion);
    // });


    return this._http.post(this.ruta + "/api/v1/principal/createVideo", data);


  }

  getVideo(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);


    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/principal/getVideo", {headers, observe:'response'})
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

  updateHablemos(data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      // this._http.post(`/api/v1/guiaDios/update/${id}`, data,  {headers})
      this._http.post(this.ruta + `/api/v1/hablemos/update`,data,  {headers})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data;
          console.log("ok");
        } catch (error) {
          resolve(error)
        }
        })
    });
  }

  getHablemos(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/hablemos/getHablemos", {headers, observe:'response'})
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

  updateTextoBiblicoImagen(imagen){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return this._http.post(this.ruta + "/api/v1/textoBiblico/updateImagen", imagen);
  }

  updateTextoBiblico(data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      // this._http.post(`/api/v1/guiaDios/update/${id}`, data,  {headers})
      this._http.post(this.ruta + `/api/v1/textoBiblico/update`,data,  {headers})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data;
          console.log(data);
        } catch (error) {
          resolve(error)
        }
        })
    });
  }

  getTextoBiblicoImagen(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/textoBiblico/getimagen", {headers, observe:'response'})
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

  getTextoBiblico(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/textoBiblico/get", {headers, observe:'response'})
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

  updateApoyame(data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      // this._http.post(`/api/v1/guiaDios/update/${id}`, data,  {headers})
      this._http.post(this.ruta + `/api/v1/apoyame/update`,data,  {headers})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data;
          console.log(data);
        } catch (error) {
          resolve(error)
        }
        })
    });
  }

  getApoyanos(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/apoyame/getAll", {headers, observe:'response'})
      .subscribe(data => {
        try {
          this.apoyame = data.body;
          // console.log("Servicio= ",this.apoyame);
          resolve(this.apoyame);

        } catch (error) {
          reject(error);
        }

      })
    });
  }

  updateGuiaDiosImagen(imagen){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return this._http.post(this.ruta + "/api/v1/galeriaPrincipal/updateGuiaDios", imagen);
  }

  updateDespertador(imagen){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return this._http.post(this.ruta + "/api/v1/galeriaPrincipal/updateDespertador", imagen);
  }

  updateReflexiones(imagen){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return this._http.post(this.ruta + "/api/v1/galeriaPrincipal/updateReflexiones", imagen);
  }

  getGaleria(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get(this.ruta + "/api/v1/galeriaPrincipal/getGaleria", {headers, observe:'response'})
      .subscribe(data => {
        try {
          this.galeria = data.body;
          // console.log(this.resultadoPeticion);
          resolve(this.galeria);

        } catch (error) {
          reject(error);
        }

      })
    });
  }

  envioCorreo(data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return this._http.post(this.ruta + "/api/v1/mail/formulario", data);
  }

}
