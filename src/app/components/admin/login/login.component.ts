import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioAdm } from 'src/app/interfaces/usuarioAdm';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  usuarioAdm: UsuarioAdm | undefined;
  nombreUsuario: string = '';
  errorLogin: boolean = false;

  constructor(private fb: FormBuilder,
    private _adminService: AdminService,  //acceder al servicio --> los servicios siempre inician con "_"
    private router: Router,                     //para navegar a traves del routeo?
    private aRoute: ActivatedRoute,
    private toastr: ToastrService) {
      this.login = this.fb.group({
        nombreUsuario: ['', Validators.required],
        contrasena: ['', Validators.required]
      })
      this.nombreUsuario = this.aRoute.snapshot.paramMap.get('nombreUsuario') || '';
    }


  ngOnInit(): void{

  }

  getUsuarioAdmin(){
    this._adminService.getUsuarioAdm().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  admLogin() {
    const admin: UsuarioAdm = {
      nombreUsuario: this.login.get("nombreUsuario")?.value,
      contrasena: this.login.get("contrasena")?.value
    }
    if(admin.nombreUsuario !== ''){
    this._adminService.adminLogin(admin).subscribe(data => {
        this.router.navigate(['inicio']);
        this.toastr.success('Sesion iniciada correctamente', 'Éxito');
      },
      (error) => {
        // Manejar errores de inicio de sesión
        this.errorLogin = true; // Establecer la variable de error en caso de error de inicio de sesión
      }
    );
  }

}
}
