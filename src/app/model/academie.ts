import { Universite } from "./universite";
import { Adresse } from "./adresse";

export class Academie {
    idAcademie!: number;
    nomAcademie!: string;
    adresseAcademie!: Adresse;
    logo!:File;
    universites!: Universite[];
}
