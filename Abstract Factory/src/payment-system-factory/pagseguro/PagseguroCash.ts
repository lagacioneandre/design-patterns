import { ICash } from "../interfaces/cash.inteface";

// classe concreta
export class PagseguroCash implements ICash {
    print(): string {
        return 'Pagseguro cash'
    }
}