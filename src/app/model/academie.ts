import { Universite } from "./universite";
import { Adresse } from "./adresse";

export class Academie {
    idAcademie!: number;
    nomAcademie!: string;
    adresseAcademie!: adresse;
    logo!:File;
    universites!: Universite[];
}
