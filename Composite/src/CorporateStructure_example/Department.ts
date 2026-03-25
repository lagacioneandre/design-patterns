import { Employee } from "./employee.interface";

// Composite - nesse caso e o departamento
export class Department implements Employee {
    private children: Employee[] = [];
    constructor(private name: string) {}

    add(employee: Employee) {
        this.children.push(employee);
    }

    remove(employee: Employee) {
        const index = this.children.indexOf(employee);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getName(): string {
        return this.name;
    }

    // A magica da recursao acontece aqui
    getSalary(): number {
        return this.children.reduce((total, child) => (
            total + child.getSalary()
        ), 0)
    }
}