import { World } from "./World";

export function tick(world: World){
    const hunger_rate = 1;
    const energy_rate = 1;
    for(const colonist of world.colonist){
        colonist.hunger = colonist.hunger + hunger_rate;
        colonist.energy = colonist.energy - energy_rate;
        if(colonist.hunger > 100){
            colonist.hunger = 100;
        }
        if(colonist.energy < 0){
            colonist.energy = 0;
        }
    }
}