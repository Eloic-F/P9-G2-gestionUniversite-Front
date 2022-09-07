import { Cours } from "./cours";
import { Classe } from "./classe";
import { Section } from "./section";

export class Formation {
    idFormation!:number;
    titreFormation!:string;
    gradeFormation!:string;
    courses!:Cours[];
    classes!:Classe[];
    section!:Section;
}
