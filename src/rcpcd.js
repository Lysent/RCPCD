import { gamestate } from "./gamestate2.m.js";
import { events } from "./events.m.js";
import sets from "./sets.m.js"

window.rcpcd = { // this is literally lystt but modded for chess
    gamestate, events,
    initServer(mapsize, mapdata){
        // loads all map data
        if(mapdata){
            this.gamestate.loadMap(mapsize, mapdata);
        }else{
            this.gamestate.createMap(mapsize);
        }

        // loads default sets
        this.planter(sets);
    },
    planter(func){
        if (typeof func !== "function")
			throw new TypeError("parameter `func` must be of type function, got " + typeof func + " instead.");

        const context = {
            gs: gamestate,
            ev: events
        };

        return func.apply(this, [context]);
    }
};