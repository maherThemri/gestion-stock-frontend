/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
export interface MvtStkDto {
  article?: ArticleDto;
  dateMvt?: string;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
