namespace Ang1 {

    export function sayHello() {
       var  i = 0;

        for (var i = 0; i < 2; i++) {

            alert("Hello:" + i);

        }
    }

    export interface IGreeter {

        Greet(name: string): void;
    }

    export class Greeter implements IGreeter {
        constructor(private salutation: string) {
        }

        Greet(name: string) {
            alert(this.salutation + " " + name);
        }
    }
}