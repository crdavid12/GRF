import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DespertadorService {

  resultadoPeticion: any;

  constructor(private _http: HttpClient,
              private _router : Router) { }


  async getAllDespertador(){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    return new Promise((resolve, reject)=>{
      this._http.get("/api/v1/despertador/getAll", {headers, observe:'response'})
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

  postDespertador(datos){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    this._http.post("/api/v1/despertador/create",{
      imagen: datos.imagen
    }, {headers, observe:'response'})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log("resutado api= ", this.resultadoPeticion);
      // window.location.reload();
      // this._router.navigate(['/guiaDios-admin']).then (() => document.defaultView.location.reload());
      this._router.navigate(['/despertador-admin'])
    });
  }

  updateDespertador(data){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                      // .set("authorization", this.token);

    console.log(data);

    return new Promise((resolve, reject)=>{
      // this._http.post(`/api/v1/guiaDios/update/${id}`, data,  {headers})
      this._http.post(`/api/v1/despertador/update`, data,  {headers})
      .subscribe(data => {
        try {
          this.resultadoPeticion = data;
          this._router.navigate(['/despertador-admin']);
        } catch (error) {
          resolve(error)
        }
    })

    });

  }
}


