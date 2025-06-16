export interface Pokemon {
    name?: string;
    url?: string;
    id?: number;
    image?: string;
    types?: string[];
    height?: number;
    weight?: number;
    abilities?: string[];
    stats?: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
    sprites?: {
        front_default: string;
        back_default: string;
        front_shiny?: string;
        back_shiny?: string;
    };
    
}
