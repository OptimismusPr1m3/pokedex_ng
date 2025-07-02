export interface Pokemon {
  name?: string;
  url?: string;
  id?: number;
  types?: any[];
  height?: number;
  weight?: number;
  abilities?: any[];
  stats?: any[];
  sprites?: {
    front_default: string;
    back_default: string;
    front_shiny?: string;
    back_shiny?: string;
  };
}
