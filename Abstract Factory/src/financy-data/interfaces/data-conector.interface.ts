// abstract product
export interface DataConector {
    createConection(conectionType: string): string;
}