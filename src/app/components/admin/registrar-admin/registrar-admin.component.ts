import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { UsuarioAdm } from 'src/app/interfaces/usuarioAdm';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit{
  registrarAdmin: FormGroup;
  errorRegistro: boolean = false;
  registroConfirmado: boolean = false;


  constructor(private fb: FormBuilder,
    private _adminService: AdminService,  //acceder al servicio --> los servicios siempre inician con "_"
    private router: Router,                     //para navegar a traves del routeo?
    private aRoute: ActivatedRoute,
    private toastr: ToastrService) {
      this.registrarAdmin = this.fb.group({
        nombreUsuario: ['', Validators.required],
        contrasena: ['', Validators.required]
      })

    }

  ngOnInit(): void {
  }

  registrarNuevoAdmin() {
    const admin: UsuarioAdm = {
      nombreUsuario: this.registrarAdmin.get("nombreUsuario")?.value,
      contrasena: this.registrarAdmin.get("contrasena")?.value
    }
    this._adminService.registrarUsuarioAdmin(admin).subscribe(data => {
      this.registroConfirmado = true;
      this.toastr.success('Registro confirmado', 'Éxito');
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      this.errorRegistro = true;
      this.toastr.error('No se pudo registrar el usuario', 'Error');
    });
  }
}

