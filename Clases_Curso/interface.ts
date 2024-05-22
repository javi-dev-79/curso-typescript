interface Dev {
    nombre: string
    tecnologias: string[]
    trabajando?: boolean | null
}

const dev1: Dev = {
    nombre: 'Javier Cordero',
    tecnologias: ['React', 'Angular', 'Django'],
    trabajando: false,
}

const dev2 = {
    nombre: 'Federico',
    tecnologias: ['Html', 'Cobol'],
    trabajando: null,
    apellido: 'Buenardo',
    recibido: false,
}

const dev3: Dev = {
    nombre: 'Antonio',
    tecnologias: ['Angular', 'Java'],
}

console.log(dev1)
console.log(dev2)
console.log(dev3)

function enviarCurriculum(dev: Dev) {
    console.log(`Este Curriculum es de ${dev.nombre}`)
}

enviarCurriculum(dev1)
enviarCurriculum(dev2)
