import { Personne } from "./personne";
import { Cours} from "./cours";
export class Evaluation {
    idEvaluation!: number;
    commentaire!: string;
    image!: File;
    cours!: Cours;
    personne!: Personne;
}
