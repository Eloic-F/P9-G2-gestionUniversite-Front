import { Form } from "@angular/forms";
import { Formation } from "./formation";
import { Personne } from "./personne";

export class Classe {
    idClasse!:number;
    nomClasse!:String;
    personnes!:Personne[];
    formation!:Formation;
    
}
