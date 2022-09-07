import { CentreDeRecherche } from "./centre-de-recherche";
import { Personne } from "./personne";
import { Section } from "./section";
import { Adresse } from "./adresse";

export class Universite {
    idUniversite!:number;
    nomUniversite!:string;
    adresseUniversite!:adresse;
    centreDeRecherches!:CentreDeRecherche[];
    personnes!:Personne[];
    sections!:Section[];
}
