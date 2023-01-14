export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    titulo: String;

    constructor(nombre: String, apellido: String, descripcion: String, titulo: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.titulo = titulo;
    }
}
