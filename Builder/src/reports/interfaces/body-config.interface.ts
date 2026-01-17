import { Formato } from "./formato.type";

export interface BodyConfig {
    definirFormato(formato: Formato): void;
    incluirResumosEstatisticos(status: boolean): void;
}