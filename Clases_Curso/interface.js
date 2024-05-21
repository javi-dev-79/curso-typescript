"use strict";
let dev1 = {
    nombre: 'Javier Cordero',
    tecnologias: ['React', 'Angular', 'Django'],
    trabajando: false,
};
let dev2 = {
    nombre: 'Federico',
    tecnologias: ['Html', 'Cobol'],
    trabajando: null,
    apellido: 'Buenardo',
    recibido: false,
};
let dev3 = {
    nombre: 'Antonio',
    tecnologias: ['Angular', 'Java'],
};
console.log(dev1);
console.log(dev2);
console.log(dev3);
function enviarCurriculum(dev) {
    console.log(`Este Curriculum es de ${dev.nombre}`);
}
enviarCurriculum(dev1);
enviarCurriculum(dev2);
