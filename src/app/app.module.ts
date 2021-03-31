import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app-routes';

//servicios
import { UsuariosService } from './servicios/usuarios.service';
import { TokenServiceService } from './servicios/token-service.service';
import { GuiaDiosService } from './servicios/guia-dios.service';
import { ReflexionesService } from './servicios/reflexiones.service';
import { DespertadorService } from './servicios/despertador.service';
import { PrincipalService } from './servicios/principal.service';




//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { GuiaDeDiosComponent } from './components/guia-de-dios/guia-de-dios.component';
import { ReflexionesComponent } from './components/reflexiones/reflexiones.component';
import { FormsModule } from '@angular/forms';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { PaginaPrincipalAdminComponent } from './components/admin/pagina-principal-admin/pagina-principal-admin.component';
import { GuiaDiosAdminComponent } from './components/admin/guia-dios-admin/guia-dios-admin.component';
import { ReflexionesAdminComponent } from './components/admin/reflexiones-admin/reflexiones-admin.component';
import { DespertadorAdminComponent } from './components/admin/despertador-admin/despertador-admin.component';
import { GuiaDiosCreateComponent } from './components/admin/guia-dios-create/guia-dios-create.component';
import { GuiaDiosModificarComponent } from './components/admin/guia-dios-modificar/guia-dios-modificar.component';
import { ReflexionesCreateComponent } from './components/admin/reflexiones-create/reflexiones-create.component';


import { HttpClientModule } from '@angular/common/http';
import { ReflexionesModificarComponent } from './components/admin/reflexiones-modificar/reflexiones-modificar.component';
import { DespertadorCreateComponent } from './components/admin/despertador-create/despertador-create.component';
import { DespertadorModificarComponent } from './components/admin/despertador-modificar/despertador-modificar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GuiaDeDiosComponent,
    ReflexionesComponent,
    HomeAdminComponent,
    PaginaPrincipalAdminComponent,
    GuiaDiosAdminComponent,
    ReflexionesAdminComponent,
    DespertadorAdminComponent,
    GuiaDiosCreateComponent,
    GuiaDiosModificarComponent,
    ReflexionesCreateComponent,
    ReflexionesModificarComponent,
    DespertadorCreateComponent,
    DespertadorModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService,
    TokenServiceService,
    GuiaDiosService,
    ReflexionesService,
    DespertadorService,
    PrincipalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
