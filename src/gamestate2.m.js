import { utils } from "./utils.m.js";

const gamestate = {
    _map: {
        size: [0, 0],
        pos: {},
        ent: {
            _i: 0
        }
    },
    createMap(size) {
        this._map = {
            size,
            pos: {},
            ent: {
                _i: 0,
            }

        }
    },

    //
    // math n objects n stuff
    //
    relative: (a, r) => [a[0] + r[0], a[1] + r[1]],

    //
    // checks
    //
    isInBounds(pos) {
        return ((pos[0] >= 0 && pos[0] <= this._map.size[0]) && (pos[0] >= 0 && pos[0] <= this._map.size[1]));
    },
    isTileOccupied(coords) {
        return (typeof this._map.pos[coords] === 'object');
    },
    isKernelOccupied(anchor, kernel) {
        const coords = utils.kernel.parseInclusive(kernel);

        for (const coord of coords)
            if (this.isTileOccupied(this.relative(anchor, coord)) == true)
                return true;
        return false;
    },
    piecePosition(id) {
        return JSON.parse(`[${utils.getKeyByValue(this._map.pos, Object.values(this._map.pos).find(ent => ent.id == id))}]`);
    },

    //
    // entity management
    //
    _ent: {},
    createSetType(name, set) {
        for (const piece of set) {
            piece.set = name;
            this._ent[piece.name] = piece;
        };
    },
    createPiece(type, team, data = {}) {
        const id = this._map.ent._i++;
        this._map.ent[id] = {
            ...data,
            team,
            type
        };
        return id;
    },
    placePiece(id, coords) {
        Object.defineProperty(this._map.pos, coords, {
            get(){
                return gamestate._map.ent[id];
            }
        })
    }
};

export { gamestate };