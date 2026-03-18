// Adaptee

// O sistema antigo retorna algo como:
// <user><attr key="uid">123</attr><attr key="name">Silva, Joao</attr><attr key="mail">joao@empresa.com</attr></user>

export class LegacyDirectorySystem {
    getEntryById(id: number) {
        // Simulacao de retorno XML de um banco antigo
        return `<user><attr key="uid">${id}</attr><attr key="name">Silva, Joao</attr><attr key="mail">joao@oldcorp.com</attr><attr key="access">admin,editor</attr></user>`;
    }
}