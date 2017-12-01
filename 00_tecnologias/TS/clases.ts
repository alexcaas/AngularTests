class Libro {
    private titulo: string;
    private autor: string;

    constructor (titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }
}

class LibroTecnico extends Libro {
    protected categoria: string;
    constructor (titulo, autor, categoria) {
        super (titulo, autor)
        this.categoria = categoria
    }
}


let oLibro = new Libro("Angular", "Pepe")
//oLibro.editorial = "Anaya"
console.log(oLibro)