/*dichiaro i tipi*/

export type TypeClass = {
    codice: string;
    titolo: string;
}

export type TypeStudent = {
    name: string;
    surname: string;    
    login: string;
    class?: TypeClass;
    repos?: string[];
}



