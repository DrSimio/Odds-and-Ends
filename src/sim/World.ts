
import { Colonist, createColonist } from "./colonist";

export interface World {
  width: number;
  height: number;
  tiles: number[];
  colonist: Colonist[];
}

export function createWorld(): World {
    const width = 40;
    const height = 30;
    const tiles = new Array(width * height).fill(0);
    const colonist = [createColonist(),createColonist(),createColonist()]
    return {
  width: width,
  height: height,
  tiles: tiles,
  colonist: colonist
};
}


