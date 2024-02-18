/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  commandeClient?: CommandeClientDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
