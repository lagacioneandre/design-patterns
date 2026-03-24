"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department_1 = require("./Department");
var Designer_1 = require("./Designer");
var Developer_1 = require("./Developer");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // --- Montagem da Arvore ---
        // 1. Criamos os funcionarios (Folhas)
        var dev1 = new Developer_1.Developer('Joao Silva', 5000);
        var dev2 = new Developer_1.Developer('Maria Sozua', 6000);
        var designer1 = new Designer_1.Designer('Carlos Arte', 4500);
        // 2. Criamos um subdepartamento (Composto) e adicionamos membros
        var developmentTeam = new Department_1.Department('Equipe de desenvolvimento');
        developmentTeam.add(dev1);
        developmentTeam.add(dev2);
        // 3. Criamos o departamento principal (Compost) e adicionamos a equipe e o designer
        var mainDepartment = new Department_1.Department('Departamento do Tecnologia');
        mainDepartment.add(developmentTeam); // Adicionamos um composto dentro de outro
        mainDepartment.add(designer1); // Adicionamos uma Folha
        // --- Execucao ---
        // O Client trata o individuo e o grupo da mesma maneira!
        this.printSalaryInfo(dev1); // Saida: Custo total de [Joao Silva]: R$ 5000
        this.printSalaryInfo(developmentTeam); // Saida: Custo total de [Equipe de desenvolvimento]: R$ 11000 (soma dos 2 devs)
        this.printSalaryInfo(mainDepartment); // Saida: Custo total de [Departamento de Tecnologia]: R$ 15000 (soma de tudo)
    };
    Client.prototype.printSalaryInfo = function (emp) {
        console.log("Custo total de [".concat(emp.getName(), "]: R$ ").concat(emp.getSalary()));
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
