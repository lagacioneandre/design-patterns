import { Employee } from "./employee.interface";

// Leaf - nesse caso um empregado (Employee)
export class Developer implements Employee {
    constructor(private name: string, private salary: number) {}

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }
}