import { Adresse } from "./adresse";
import { Universite } from "./universite";

export class CentreDeRecherche {
    idCentreDeRecherche!:number;
    nomCentreDeRecherche!:string;
    adresseCentreDeRecherche!:Adresse;
    logo!:File;
    universite!:Universite;
}
