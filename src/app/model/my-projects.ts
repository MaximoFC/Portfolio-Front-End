export class MyProjects {
    id?: number;
    nombreE : string;
    descripcionE : string;
    tecnologias: string;

    constructor(nombreE: string, descripcionE: string, tecnologias: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tecnologias = tecnologias;
    }
}
