export class Hello {
    firstName: string = 'Ray';
    lastName: string = 'Luo';

    sayHello() {
        alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
    }
}
