/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
export interface UtilisateurDto {
  adresse?: AdresseDto;
  dateDeNaissance?: string;
  email?: string;
  entreprise?: EntrepriseDto;
  id?: number;
  idRole?: number;
  moteDePasse?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
  roleName?: string;
}
