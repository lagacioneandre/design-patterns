import { Department } from "./Department";
import { Designer } from "./Designer";
import { Developer } from "./Developer";
import { Employee } from "./employee.interface";

class Client {
    execute() {
        // --- Montagem da Arvore ---

        // 1. Criamos os funcionarios (Folhas)
        const dev1 = new Developer('Joao Silva', 5000);
        const dev2 = new Developer('Maria Sozua', 6000);
        const designer1 = new Designer('Carlos Arte', 4500);

        // 2. Criamos um subdepartamento (Composto) e adicionamos membros
        const developmentTeam = new Department('Equipe de desenvolvimento');
        developmentTeam.add(dev1);
        developmentTeam.add(dev2);

        // 3. Criamos o departamento principal (Compost) e adicionamos a equipe e o designer
        const mainDepartment = new Department('Departamento do Tecnologia');
        mainDepartment.add(developmentTeam); // Adicionamos um composto dentro de outro
        mainDepartment.add(designer1); // Adicionamos uma Folha

        // --- Execucao ---
        // O Client trata o individuo e o grupo da mesma maneira!
        this.printSalaryInfo(dev1); // Saida: Custo total de [Joao Silva]: R$ 5000
        this.printSalaryInfo(developmentTeam); // Saida: Custo total de [Equipe de desenvolvimento]: R$ 11000 (soma dos 2 devs)
        this.printSalaryInfo(mainDepartment); // Saida: Custo total de [Departamento de Tecnologia]: R$ 15000 (soma de tudo)
    }

    private printSalaryInfo(emp: Employee) {
        console.log(`Custo total de [${emp.getName()}]: R$ ${emp.getSalary()}`);
    }
}

(() => {
    new Client().execute();
})();