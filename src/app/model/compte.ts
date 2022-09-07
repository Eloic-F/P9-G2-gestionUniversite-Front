import { Personne } from "./personne";

export class Compte {
    idCompte!:number;
    numeroCompte!:number;
    statut!:string;
    personne!:Personne;
}
