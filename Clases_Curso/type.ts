type Programador = {
    nombre: string
    tecnologias: string[]
    trabajando?: boolean | null
}

let programador1: Programador = {
    nombre: 'Javier Cordero',
    tecnologias: ['React', 'Angular', 'Django'],
    trabajando: false,
}

let programador2: Programador = {
    nombre: 'Federico',
    tecnologias: ['Html', 'Cobol'],
    trabajando: null
}

let programador3: Programador = {
    nombre: 'Antonio',
    tecnologias: ['Angular', 'Java'],
}

console.log(programador1)
console.log(programador2)
console.log(programador3)