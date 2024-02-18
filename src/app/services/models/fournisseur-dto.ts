/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
export interface FournisseurDto {
  adresse?: AdresseDto;
  commandeFournisseur?: Array<CommandeFournisseurDto>;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
  idEntreprise?: number;
}
