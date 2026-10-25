
let col_cont = 0;

export interface Colonist {
    type: String;
    id: number;
    x: number;
    y: number;
    hunger: number;
    energy: number;
    mood: number;
}

export function createColonist(): Colonist {
    const type = "Human";
    const id = (col_cont + 1);
    const x = Math.floor(Math.random() * 40);
    const y = Math.floor(Math.random() * 30);
    const hunger = 0;
    const energy = 100;
    const mood = 100;
    col_cont = col_cont + 1;
    return{
        type: type,
        id: id,
        x: x,
        y: y,
        hunger: hunger,
        energy: energy,
        mood: mood
    };
}