class Sorteo<T> {

    private ticket?: T
    
    constructor(
        private nombre: string
    ) {}

    setTicket(ticket: T) {
        this.ticket = ticket
    }

    getTicket() {
        return this.ticket
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }

}

let sorteo = new Sorteo<string>('Javier Cordero')
sorteo.setTicket('9')
console.log(sorteo.sortear())

let sorteo1 = new Sorteo<number>('Dylan Cordero')
sorteo1.setTicket(5)
console.log(sorteo1.sortear())
