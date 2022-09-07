import { CentreDeRecherche } from "./centre-de-recherche";
import { Personne } from "./personne";
import { Section } from "./section";
import { Adresse } from "./adresse";
import { Academie } from "./academie";

export class Universite {
    idUniversite!:number;
    nomUniversite!:string;
    adresseUniversite!:Adresse;
    academie!:Academie;
    centreDeRecherches!:CentreDeRecherche[];
    personnes!:Personne[];
    sections!:Section[];
}
