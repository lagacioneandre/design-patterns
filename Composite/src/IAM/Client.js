"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Group_1 = require("./Group");
const User_1 = require("./User");
class Client {
    execute() {
        const alicePermissions = new Set();
        alicePermissions.add('read');
        const alice = new User_1.User('Alice', alicePermissions);
        const bobPermissions = new Set();
        bobPermissions.add('write');
        const bob = new User_1.User('Bob', bobPermissions);
        const equipeBeta = new Group_1.Group();
        equipeBeta.add(bob);
        const departamentoTi = new Group_1.Group();
        departamentoTi.add(alice);
        departamentoTi.add(equipeBeta);
        departamentoTi.setPermission('network_access');
        console.log(`O departemento de TI tem permissao para ler? ${departamentoTi.hasPermission('write')}`); // true, porque Bob esta no subgrupo e tem esse acesso
        console.log(`O departemento de TI tem permissao para escrever? ${departamentoTi.hasPermission('read')}`); // true, porque Alice tem esse acesso
        console.log(`O departemento de TI tem acesso a rede? ${departamentoTi.hasPermission('network_access')}`); // true, porque o grupo tem esse acess
        console.log(`Total de usuarios no departamento de TI: ${departamentoTi.countTotalUsers()}`); // deve retornar 2
        console.log(`A Alice tem permissao para escreve? ${alice.hasPermission('write')}`); // deve ser false
    }
}
(() => {
    new Client().execute();
})();
