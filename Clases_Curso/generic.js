"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Javier Cordero');
sorteo.setTicket('9');
console.log(sorteo.sortear());
let sorteo1 = new Sorteo('Dylan Cordero');
sorteo1.setTicket(5);
console.log(sorteo1.sortear());
