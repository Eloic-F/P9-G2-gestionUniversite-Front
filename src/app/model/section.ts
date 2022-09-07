import { Formation } from "./formation";
import { Universite } from "./universite";

export class Section {
    idSection!:number;
    nomSection!:string;
    universite!:Universite;
    formations!:Formation[];
}
