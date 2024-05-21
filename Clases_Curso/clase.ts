class Pelicula{
    nombre?: string
    protagonistas?: string[]
    actores?: string[]

    constructor(nombre: string, protagonistas: string[], actores: string[]) {
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }

    proyectarEnCine() {
        console.log(`${this.nombre} está siendo proyectada.`)
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])
const pelicula2 = new Pelicula('Oppenheimer', ['Strauss', 'Oppenheimer'], ['Cillian Murphy', 'Robert Downey Jr.'])

pelicula.proyectarEnCine()
pelicula2.proyectarEnCine()

console.log(pelicula)
console.log(pelicula2)