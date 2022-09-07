import { Adresse } from "../entities/adresse";
import { Universite } from "./universite";

export class Academie {
    idAcademie!: number;
    nomAcademie!: string;
    adresseAcademie!: Adresse;
    logo!:File;
    universites!: Universite[];
}
