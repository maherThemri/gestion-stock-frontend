/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
export interface ClientDto {
  adresse?: AdresseDto;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
  idEntreprise?: number;
}
