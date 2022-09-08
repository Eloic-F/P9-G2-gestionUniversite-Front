import { Personne } from "./personne";
export interface IHash{
    [details: string] : string;
}

export class Question {
    idQuestion!:number;
    question:IHash={};
    categorie!:string;
    personne!:Personne;
}
