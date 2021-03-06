/**
 * Created by USRDEL on 6/6/17.
 */
export interface PlanetaSWInterface{
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string;
  films: string[];
  imagenURL?: string;
}
