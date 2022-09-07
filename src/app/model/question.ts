import { Personne } from "./personne";

export class Question {
    idQuestion!:number;
    question!:string;
    categorie!:string;
    personne!:Personne;
}
