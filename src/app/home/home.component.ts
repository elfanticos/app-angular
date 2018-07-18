import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  crear:boolean = true;
  editar: boolean = false;
  eliminar: boolean = false;
  nombre:any = null;
  apellidos: any = null;
  crearPer:boolean = false;
  indice:number;
  personas: Data[] = [
    {nombre : 'Omar', apellido : 'Damiano', correo : 'email@email.com',edad : 29}
  ];
  constructor() { }

  ngOnInit() {}

  editarPersona(index:number) {
    let dataEdit = this.personas[index];
    this.editar = true;
    this.crear = false;
    this.crearPer = false;
    this.nombre = dataEdit.nombre;
    this.apellidos = dataEdit.apellido;
    this.indice = index;
  }

  regresar() {
    this.crear = true;
    this.editar = false;
    this.crearPer = false;
    this.nombre = null;
    this.apellidos = null;
  }

  editarRegistro() {
    this.personas[this.indice].nombre = this.nombre;
    this.personas[this.indice].apellido = this.apellidos;
    this.regresar();
  }


  eliminarPersona(index:number) {
    this.personas.splice(index, 1);
  }

  crearPersona() {
    let dataInsert: Data = {
      nombre: this.nombre,
      apellido: this.apellidos,
      correo: '',
      edad: 0
    };
    this.personas.push(dataInsert);
    this.nombre = null;
    this.apellidos = null;
    this.regresar();
  }

}

interface Data{
  nombre:string,
  apellido:string,
  correo:string,
  edad:number
}