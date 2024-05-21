let estudiasteJavascript: boolean = true

if (estudiasteJavascript) {
    console.log('Puedes seguir viendo este curso de Typescript.')
} else {
    console.log('Primero tienes que ver el curso de Javascript.')
}

let interMiami: number = 11
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

let palabras: string = 'Me emocioné cuando perdió Messi'

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    let motivo = ''
    if (juegaMessi) {
        equipo1 -= messi
        motivo = ' porque juega Messi.'
    } 
    if (equipo1 > equipo2) console.log(`Gana Inter Miami`)
    if (equipo1 == equipo2) console.log('Empatan')
    if (equipo1 < equipo2) console.log(`Gana FC Dallas${motivo}`)
}

jugar(interMiami, fcDallas, juegaMessi)


