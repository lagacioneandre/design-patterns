/*
    Aqui 'e o Abstract Product
    Term o proposito de declara a interface para qum tipo especifico de produto dentro da familia.
    Define as operacoes que todos os produtos desse tipo devem ter.
*/
export interface ICar {
    color(color: string): string;
    numberOfPorts(ports: number): string;
    engineModel(engine: string): string;
}