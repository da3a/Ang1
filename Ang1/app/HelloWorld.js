var Ang1;
(function (Ang1) {
    function sayHello() {
        var i = 0;
        for (var i = 0; i < 2; i++) {
            alert("Hello:" + i);
        }
    }
    Ang1.sayHello = sayHello;
    var Greeter = (function () {
        function Greeter(salutation) {
            this.salutation = salutation;
        }
        Greeter.prototype.Greet = function (name) {
            alert(this.salutation + " " + name);
        };
        return Greeter;
    })();
    Ang1.Greeter = Greeter;
})(Ang1 || (Ang1 = {}));
//# sourceMappingURL=HelloWorld.js.map