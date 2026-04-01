import { Group } from "./Group";
import { User } from "./User";

class Client {
    execute() {
        const alicePermissions = new Set<string>();
        alicePermissions.add('read');
        const alice = new User('Alice', alicePermissions);

        const bobPermissions = new Set<string>();
        bobPermissions.add('write');
        const bob = new User('Bob', bobPermissions);

        const equipeBeta = new Group();
        equipeBeta.add(bob);

        const departamentoTi = new Group();
        departamentoTi.add(alice);
        departamentoTi.add(equipeBeta);
        departamentoTi.setPermission('network_access');

        console.log(`O departemento de TI tem permissao para ler? ${departamentoTi.hasPermission('write')}`) // true, porque Bob esta no subgrupo e tem esse acesso
        console.log(`O departemento de TI tem permissao para escrever? ${departamentoTi.hasPermission('read')}`); // true, porque Alice tem esse acesso
        console.log(`O departemento de TI tem acesso a rede? ${departamentoTi.hasPermission('network_access')}`); // true, porque o grupo tem esse acess
        console.log(`Total de usuarios no departamento de TI: ${departamentoTi.countTotalUsers()}`); // deve retornar 2
        console.log(`A Alice tem permissao para escreve? ${alice.hasPermission('write')}`); // deve ser false
    }
}

(() => {
    new Client().execute();
})();