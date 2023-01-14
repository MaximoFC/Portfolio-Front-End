import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data={
    correo:"",
    contraseña:""
  }
  
  constructor(private router: Router) {}

  funcion(event:any){
    let target = event.target;
    let id = target.attributes.id;
    let value = id.nodeValue;
    if(value==="exampleInputPassword1") this.data.contraseña = event.target.value
    if(value==="exampleInputEmail1") this.data.correo = event.target.value
}

  grabar_localstorage(){
    let actualUsers = JSON.parse(localStorage.getItem("users")!)
    let findedUser = actualUsers.find((user: any) => user.correo === this.data.correo) 
    if(findedUser){
      let correctPassword = findedUser.contraseña === this.data.contraseña;
      if(correctPassword) this.router.navigate(['/home']);
      else alert("Contraseña incorrecta")
    }else{
      alert("No existe ese correo en la base de datos")
    }
  }

  ngOnInit(): void {
    let users = [{
      correo: "maximofcallejas@gmail.com",
      contraseña: "admin"
    }]
    localStorage.setItem( "users", JSON.stringify(users) );
  }

}

