import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { PrincipalService } from '../../servicios/principal.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  resultadoPeticion : any;
  videoPrincipal: any;
  hablemos: any;
  imagenTextoBiblico: any;
  TextoBiblicoTitulo: any;
  TextoBiblicoDecripcion: any;
  apoyame: any;
  galeria: any;
  correoEnviado: Boolean;
  cont = 0;

  constructor( private _usuariosService:UsuariosService,
              private _principalService:PrincipalService,
              public dom : DomSanitizer) {
                this.getVideo();
                this.getHablemos();
                this.getTextoBiblicoImagen();
                this.getTextoBiblico();
                this.getApoyame();
                this.getGaleria();
                this.correoEnviado = false;
;   }

  ngOnInit(): void {
  }

  async getVideo(){
    await this._principalService.getVideo().then(()=>{
      this.resultadoPeticion = this._principalService.resultadoPeticion;
      this.videoPrincipal = this._principalService.resultadoPeticion[0].Urlvideo;
      // console.log(this.resultadoPeticion);
    })
  }

  async getHablemos(){
    await this._principalService.getHablemos().then(()=>{
      this.hablemos = this._principalService.resultadoPeticion[0].descripcion;
    })
  }

  async getTextoBiblicoImagen(){
    await this._principalService.getTextoBiblicoImagen().then(()=>{
      this.imagenTextoBiblico = this._principalService.resultadoPeticion;
      this.imagenTextoBiblico = this.imagenTextoBiblico.resultado;
      // console.log(this.imagenTextoBiblico);
    })
  }

  async getTextoBiblico(){
    await this._principalService.getTextoBiblico().then(()=>{
      this.TextoBiblicoTitulo = this._principalService.resultadoPeticion;
      this.TextoBiblicoTitulo = this.TextoBiblicoTitulo[0].titulo;
      this.TextoBiblicoDecripcion = this._principalService.resultadoPeticion;
      this.TextoBiblicoDecripcion = this.TextoBiblicoDecripcion[0].descripcion;

    })
  }

  async getApoyame(){
    await this._principalService.getApoyanos().then(()=>{
      this.apoyame = this._principalService.apoyame;
    })
  }

  async getGaleria(){
    await this._principalService.getGaleria().then(()=>{
      this.galeria = this._principalService.galeria;
      this.galeria = this.galeria.resultado;
    })
  }

  async validacionCorreo(){
    var forms = document.querySelectorAll('.needs-validation')
    await Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)

          })
          console.log("cont2");

  }


  envioCorreo(){

    this.validacionCorreo()

    let validnombre = ((document.getElementById("nombre") as HTMLInputElement).validity);
    let validcorreo = ((document.getElementById("correo") as HTMLInputElement).validity);
    let validcontacto = ((document.getElementById("numeroContacto") as HTMLInputElement).validity);
    let validmotivo = ((document.getElementById("motivo") as HTMLInputElement).validity);

    if((validnombre.valid && validcorreo.valid && validcontacto.valid && validmotivo.valid)==true){

      let data={
      nombre :((document.getElementById("nombre") as HTMLInputElement).value),
      correo :((document.getElementById("correo") as HTMLInputElement).value),
      contacto :((document.getElementById("numeroContacto") as HTMLInputElement).value),
      motivo :((document.getElementById("motivo") as HTMLInputElement).value)
      }

      this._principalService.envioCorreo(data).subscribe((res)=>{
        console.log("Response", res);
        this.correoEnviado = true;
      });
    }else{
      this.correoEnviado = false
    }
  }

}
