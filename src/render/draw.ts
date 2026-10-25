import { World } from "../sim/World.ts";
import { Colonist } from "../sim/colonist.ts"

const TILE_SIZE = 10;

export function drawWorld(world: World, ctx: CanvasRenderingContext2D) {
    for (let x = 0; x < world.width; x++) {
        for(let y = 0;y < world.height; y++){
            const index = y * world.width + x;
            const tileType = world.tiles[index]
            if(tileType == 1){
                ctx.fillStyle = "blue";
            }
            else{
                ctx.fillStyle = "green";
            }
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }
    for (const colonist of world.colonist){
        drawColonist(colonist,ctx)
    }
}

export function drawColonist(colonist: Colonist, ctx: CanvasRenderingContext2D){
    const x = colonist.x * 10 + 5;
    const y = colonist.y * 10 + 5;
    const ang = Math.PI * 2
    ctx.beginPath()
    ctx.fillStyle = "black";
    ctx.arc(x,y,5,0,ang,true);
    ctx.fill();
}