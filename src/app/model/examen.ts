import { Personne } from "./personne";

export class Examen {
    idExamen!:number;
    type!:string;
    dateExamen!:Date;
    dureeExamen!:number;
    note!:number;
    correction!:string;
    personne!:Personne;
}
