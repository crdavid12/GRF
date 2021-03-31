import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { PrincipalService } from '../../../servicios/principal.service';
import { DomSanitizer } from '@angular/platform-browser';
import { TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';



declare let $:any;

@Component({
  selector: 'app-pagina-principal-admin',
  templateUrl: './pagina-principal-admin.component.html'
})
export class PaginaPrincipalAdminComponent implements OnInit {

  public archivos: any = [];
  public archivosGuiaDios: any = [];
  public archivosDespertador: any =[];
  public archivosReflexiones: any =[];
  public previsualizacion : String;
  public previsualizacionGuiaDios : String;
  public previsualizacionDespertador : String;
  public previsualizacionReflexiones : String;
  public uploadedFiles: Array<File>;

  constructor(private _usuariosService : UsuariosService,
              private _principalService : PrincipalService,
              private sanitizer: DomSanitizer,
              private _http: HttpClient) {
  }

  ngOnInit(): void {
  }

  video(){
    let data={
      Urlvideo :((document.getElementById("urlVideoPrincipal") as HTMLInputElement).value)
    }
    if(data.Urlvideo !=""){
      var mensaje = confirm('Desea guardar los cambios')
      if(mensaje == true){
        this._principalService.createVideo(data).subscribe((res)=>{
          console.log("Response", res);
          (document.getElementById("urlVideoPrincipal") as HTMLInputElement).value = "";
          alert("Video guardado")
        });
      }
    }else{
      alert("Ingrese los datos")
    }
  }

  fileEvent(event){

    let uploadedFiles = event.target.files[0];
    this.extraerBase64(uploadedFiles).then((imagen: any)=>{
      this.previsualizacion = imagen.base;
    });
    this.archivos[0] = uploadedFiles
  }

  fileEventGuiaDios(event){

    let uploadedFiles = event.target.files[0];
    this.extraerBase64(uploadedFiles).then((imagen: any)=>{
      this.previsualizacionGuiaDios = imagen.base;
      // console.log(this.previsualizacionGuiaDios);
    });
    this.archivosGuiaDios[0] = uploadedFiles
    // console.log("archivo= ", this.archivosGuiaDios);
  }

  fileEventDespertador(event){
    let uploadedFiles = event.target.files[0];
    this.extraerBase64(uploadedFiles).then((imagen: any)=>{
      this.previsualizacionDespertador = imagen.base;
    });
    this.archivosDespertador[0] = uploadedFiles
  }

  fileEventReflexiones(event){
    let uploadedFiles = event.target.files[0];
    this.extraerBase64(uploadedFiles).then((imagen: any)=>{
      this.previsualizacionReflexiones = imagen.base;
    });
    this.archivosReflexiones[0] = uploadedFiles
  }

  //Convertir en base64
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob:$event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  customFileInput(){
    $(".customFileInput").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".customfilelabel").addClass("selected").html(fileName);
    });
  }

  postVideo(){
    var video = `../../../assets/videos/${((document.getElementById("customFile") as HTMLInputElement).files[0].name)}`;

    this._usuariosService.postHome();

  }

  guardarHablemos(){
    var data ={
      descripcion :  ((document.getElementById("descripcionHablemos") as HTMLInputElement).value)
    }
    if(data.descripcion != ""){
      var mensaje = confirm('Desea guardar los cambios')
      if(mensaje == true){
        this._principalService.updateHablemos(data);
        (document.getElementById("descripcionHablemos") as HTMLInputElement).value = "";
      }
    }else{
      alert("Ingese los datos");
    }
  }

  guardarTextoBiblico(){

    // Capturamos los datos
    var data ={
      titulo :  ((document.getElementById("tituloTextoBiblico") as HTMLInputElement).value),
      descripcion :  ((document.getElementById("descripcionTextoBiblico") as HTMLInputElement).value),
    }

    //Validamos si exiten archivos en la variable archivos
    if(this.archivos[0] || data.titulo != "" || data.descripcion != ""){
      var mensaje = confirm('Desea guardar los cambios')
      if(mensaje == true){
        if(this.archivos[0]){
          // el archivo capturado lo convertimos en binario para ser enviado al backEnd
          const formularioDeDatos = new FormData();
          this.archivos.forEach(archivo => {
            console.log(archivo);
            formularioDeDatos.append('upload', archivo)
          });

          //Se envia el archivo
          this._principalService.updateTextoBiblicoImagen(formularioDeDatos).subscribe((res)=>{
            console.log("Response", res);
            this.archivos = [];
            (document.getElementById("imagenTextoBiblico") as HTMLInputElement).value = "";
          });
        }

        this._principalService.updateTextoBiblico(data);
        (document.getElementById("tituloTextoBiblico") as HTMLInputElement).value = "";
        (document.getElementById("descripcionTextoBiblico") as HTMLInputElement).value = "";
        }

    }else{
      alert("Ingrese algún datos")
    }
  }

  guardarApoyame(){
    // capturamos los datos
    const data ={
      titulo :  ((document.getElementById("tituloApoyame") as HTMLInputElement).value),
      descripcion :  ((document.getElementById("descricionApoyame") as HTMLInputElement).value),
      citaBiblica :  ((document.getElementById("titulocita") as HTMLInputElement).value),
      descripcionBiblica :  ((document.getElementById("descricionCita") as HTMLInputElement).value),
    }

    if(data.titulo != "" || data.descripcion != "" || data.citaBiblica != "" || data.descripcionBiblica != ""){
      var mensaje = confirm('Desea guardar los cambios')
      if(mensaje == true){
        this._principalService.updateApoyame(data);
        (document.getElementById("tituloApoyame") as HTMLInputElement).value = "";
        (document.getElementById("descricionApoyame") as HTMLInputElement).value = "";
        (document.getElementById("titulocita") as HTMLInputElement).value = "";
        (document.getElementById("descricionCita") as HTMLInputElement).value = "";
      }
    }else{
      alert("Ingrese algún dato")
    }

  }

  async guardarImagenes(){
    if(this.archivosGuiaDios[0] || this.archivosDespertador[0] || this.archivosReflexiones[0]){
      // await this.mensajeAlerta();
      var mensaje = confirm('Desea guardar los cambios')
      if(mensaje == true){
        if(this.archivosGuiaDios[0]){
          // el archivo capturado lo convertimos en binario para ser enviado al backEnd
          const formularioDeDatos = new FormData();
          this.archivosGuiaDios.forEach(archivo => {
            console.log(archivo);
            formularioDeDatos.append('upload', archivo)
          });

          //Se envia el archivo
          this._principalService.updateGuiaDiosImagen(formularioDeDatos).subscribe((res)=>{
            console.log("Response", res);
            this.archivosGuiaDios = [];
            (document.getElementById("imagenTextoBiblico") as HTMLInputElement).value = "";
          });
        }
        if(this.archivosDespertador[0]){
          // el archivo capturado lo convertimos en binario para ser enviado al backEnd
          const formularioDeDatos = new FormData();
          this.archivosDespertador.forEach(archivo => {
            formularioDeDatos.append('upload', archivo)
          });

          //Se envia el archivo
          this._principalService.updateDespertador(formularioDeDatos).subscribe((res)=>{
            console.log("Response", res);
            this.archivosDespertador = [];
            (document.getElementById("imagenDespertador") as HTMLInputElement).value = "";
          });
        }
        if(this.archivosReflexiones[0]){
          // el archivo capturado lo convertimos en binario para ser enviado al backEnd
          const formularioDeDatos = new FormData();
          await this.archivosReflexiones.forEach(archivo => {
            formularioDeDatos.append('upload', archivo)
          });
          //Se envia el archivo
          this._principalService.updateReflexiones(formularioDeDatos).subscribe((res)=>{
          console.log("Response", res);
          (document.getElementById("imagenRefelxiones") as HTMLInputElement).value = "";
          this.archivosReflexiones = [];
          });
        }
      }
    }else{
      alert("Ingrese al menos una imagen")
    }

  }


}
