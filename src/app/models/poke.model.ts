export interface PokeResponseData {
  count: number;
  data: Poke[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface Poke {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: SetInfo;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: Images;
  tcgplayer: TcgPlayerInfo;
  cardmarket: CardMarketInfo;
}

interface Ability {
  name: string;
  text: string;
  type: string;
}

interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface Resistance {
  type: string;
  value: string;
}

interface SetInfo {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

interface Legalities {
  unlimited: string;
}

interface SetImages {
  symbol: string;
  logo: string;
}

interface Images {
  small: string;
  large: string;
}

interface TcgPlayerInfo {
  url: string;
  updatedAt: string;
  prices: {
    holofoil: PriceInfo;
    reverseHolofoil: PriceInfo;
  };
}

interface PriceInfo {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number | null;
}

interface CardMarketInfo {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
  };
}
