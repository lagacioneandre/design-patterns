// import { SandwichType } from "./ingredients.type";

// export interface Command {
//     execute(order: SandwichType): void;
// }

export interface Command {
    execute(): void; // Sem parâmetro
}