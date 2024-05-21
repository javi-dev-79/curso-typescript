"use strict";
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log('Puedes seguir viendo este curso de Typescript.');
}
else {
    console.log('Primero tienes que ver el curso de Javascript.');
}
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocioné cuando perdió Messi';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 -= messi;
        motivo = ' porque juega Messi.';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami`);
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log(`Gana FC Dallas${motivo}`);
}
jugar(interMiami, fcDallas, juegaMessi);
