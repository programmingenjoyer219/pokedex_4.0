export interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
  species: string;
  description: string;
  evolution: {
    next: string[][];
  };
  profile: {
    height: string;
    weight: string;
    egg: string[];
    ability: string[][];
    gender: string;
  };
  image: {
    sprite: string;
    thumbnail: string;
    hires: string;
  };
}
