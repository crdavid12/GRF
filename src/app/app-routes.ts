import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { GuiaDeDiosComponent } from './components/guia-de-dios/guia-de-dios.component';
import { ReflexionesComponent } from './components/reflexiones/reflexiones.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { PaginaPrincipalAdminComponent } from './components/admin/pagina-principal-admin/pagina-principal-admin.component';
import { GuiaDiosAdminComponent } from './components/admin/guia-dios-admin/guia-dios-admin.component';
import { ReflexionesAdminComponent } from './components/admin/reflexiones-admin/reflexiones-admin.component';
import { DespertadorAdminComponent } from './components/admin/despertador-admin/despertador-admin.component';
import { DespertadorCreateComponent } from './components/admin/despertador-create/despertador-create.component';
import { DespertadorModificarComponent } from './components/admin/despertador-modificar/despertador-modificar.component';
import { GuiaDiosCreateComponent } from './components/admin/guia-dios-create/guia-dios-create.component';
import { GuiaDiosModificarComponent } from './components/admin/guia-dios-modificar/guia-dios-modificar.component';
import { ReflexionesCreateComponent } from './components/admin/reflexiones-create/reflexiones-create.component';
import { ReflexionesModificarComponent } from './components/admin/reflexiones-modificar/reflexiones-modificar.component';





const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'guia-de-Dios', component: GuiaDeDiosComponent},
    { path: 'reflexiones', component: ReflexionesComponent},
    { path: 'home-admin', component: HomeAdminComponent},
    { path: 'paginaPrincipal-admin', component: PaginaPrincipalAdminComponent},
    { path: 'guiaDios-admin', component: GuiaDiosAdminComponent,runGuardsAndResolvers: 'paramsOrQueryParamsChange' },
    { path: 'guiaDios-create', component: GuiaDiosCreateComponent},
    { path: 'guiaDios-modificar/:id', component: GuiaDiosModificarComponent},
    { path: 'reflexiones-admin', component: ReflexionesAdminComponent},
    { path: 'reflexiones-create', component: ReflexionesCreateComponent},
    { path: 'reflexiones-modificar/:id', component: ReflexionesModificarComponent},
    { path: 'despertador-admin', component: DespertadorAdminComponent},
    { path: 'despertador-create', component: DespertadorCreateComponent},
    { path: 'despertador-modificar/:id', component: DespertadorModificarComponent},

    { path: '**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
