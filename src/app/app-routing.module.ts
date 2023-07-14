import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/admin/login/login.component";
import { RegistrarAdminComponent } from "./components/admin/registrar-admin/registrar-admin.component";
import { InicioComponent } from './components/admin/inicio/inicio.component';

const routes: Routes = [
  /* { path: "", component: AppComponent, pathMatch: "full" }, */
  { path: "", component: LoginComponent },
  { path: "registrarse", component: RegistrarAdminComponent},
  { path: "inicio", component: InicioComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
