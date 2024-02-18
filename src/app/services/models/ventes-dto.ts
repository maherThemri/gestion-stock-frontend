/* tslint:disable */
/* eslint-disable */
import { LigneVenteDto } from '../models/ligne-vente-dto';
export interface VentesDto {
  code?: string;
  commantaire?: string;
  dateVente?: string;
  id?: number;
  ligneVente?: Array<LigneVenteDto>;
}
