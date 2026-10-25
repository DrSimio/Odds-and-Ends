import './style.css'
import { drawWorld } from './render/draw.ts'
import { createWorld } from './sim/World.ts';
import { tick } from './sim/tick.ts';

const canvas = document.getElementById("world") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const world = createWorld();

if(ctx){
  setInterval(() => { tick(world); drawWorld(world,ctx) }, 500)
}

