import { Compte } from "./compte";
import { Evaluation } from "./evaluation";
import { Examen } from "./examen";
import { Universite } from "./universite";
import { Role } from "./role";
import { Question } from "./question";
import { Cours } from "./cours";
import { Classe} from "./classe";
import { Adresse } from "./adresse";

export class Personne {
  id!: number;
  nom!: string;
  prenom!: string;
  dateNaissance!: Date;
  email!: string;
  numeroTel!: number;
  adressePersonne!: Adresse;
  image!: File;
  username!: string;
  password!: string;
  classe!: Classe;
  universite!: Universite;
  compte!: Compte;
  examens!: Examen[];
  evaluations!: Evaluation[];
  courses!: Cours[];
  questions!:Question;
  roles!: Role[];
}
