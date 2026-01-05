/*
    Aqui 'e o Abstract Product
    Term o proposito de declara a interface para qum tipo especifico de produto dentro da familia.
    Define as operacoes que todos os produtos desse tipo devem ter.
*/
export interface ITruck {
    color(color: string): string;
    numberOfWheels(wheels: number): string;
    enginePowder(powder: string): string;
}