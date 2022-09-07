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
  questions!: Question[];
  roles!: Role[];
}
