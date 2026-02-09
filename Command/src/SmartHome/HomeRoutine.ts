import { ICommand } from "./command.interface";

export class HomeRoutine implements ICommand {
    private commands: ICommand[];
    
    constructor (commands: ICommand[]) {
        this.commands = commands;
    }
    
    execute() {
        /**
         * no for comentado abaixo temos um problema de que, se o segundo comando falhar, o primeiro comando que ja foi
         * executado com sucesso nao 'e desfeito, dessa forma o estado dos comandos fica inconsistente.
         * por exemplo se estou saindo de casa e quero desligar tudo, a luz ficaria apagada, mas o ar condicionada ligado
         * e o comando para trancar as portas nem seria executado. O correto 'e desfazer o comando de apagar as luzes 
         * acendendo-as novamente
         * 
         * o codigo nao comentado 'e a implementacao correta de uma automacao
         */
        // for (const command of this.commands) {
        //     const response = command.execute();
        //     if (!response) return false;
        // }

        const executedCommands: ICommand[] = [];
        for (const command of this.commands) {
            const response = command.execute();
            if (response) executedCommands.push(command);
            else {
                // Rolback de emergencia: desfaz o que ja tinha funcionado
                executedCommands.reverse().forEach(c => c.undo());
                return false;
            }
        }
        return true;
    }

    undo() {
        /**
         * corrigindo essa implementacao abaixo, dessa forma o metodo reverse vai alterar o array original,
         * isso causara efeitos colaterais, o correto 'e clonar o array original e ai sim usar o metodo reverse
         */
        // const reverseCommands = this.commands.reverse() -> essa 'e a forma original usada e abaixo a forma correta
        const reverseCommands = [...this.commands].reverse();
        reverseCommands.forEach(command => command.undo());
    }
}