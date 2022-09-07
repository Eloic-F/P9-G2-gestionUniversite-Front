import { Cours } from "./cours";
import { Classe } from "./classe";

export class Formation {
    idFormation!:number;
    titreFormation!:string;
    gradeFormation!:string;
    courses!:Cours[];
    classes!:Classe[];
}
