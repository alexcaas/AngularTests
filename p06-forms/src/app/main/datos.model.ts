export interface ImpresoraModel {
    id: string | number;
    nombre: string;
}

export interface DepartamentoModel {
    id: string | number;
    nombre: string;
}

export interface UsuarioModel {
    nombre: string;
    apellidos: string;
    telefono: string;
}

export class Usuario implements UsuarioModel {
    constructor(
        public nombre: string,
        public apellidos: string,
        public telefono: string
    ) {}
}
