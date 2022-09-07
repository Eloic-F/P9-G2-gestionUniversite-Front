import { Evaluation } from "./evaluation";
import { Formation } from "./formation";
import { Personne } from "./personne";
import { Question } from "./question";
import { UE } from "./ue";

export class Cours {
    idCours!:number;
    libelleCours!:String;
    dureeCours!:number;
    image!:String;
    ue!:UE;
    formation!:Formation;
    personne!:Personne;
    evaluations!: Evaluation[];
    questions!: Question[];
}
