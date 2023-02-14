import { utils } from "./utils.m.js";

const gamestate = {
    //
    // creating, loading, and setting map data
    //
    _map: {
        size: [0, 0],
        data: {
            pos: {},
            entity: {
                _index: 0,
            }
        }
    },
    createMap(size) {
        this._map = {
            size,
            data: {
                pos: {},
                entity: {
                    _index: 0,
                }
            }
        }
    },
    loadMap(size, data) {
        this.createMap(size);
        this._map.data = data;
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
        return (typeof this._map.data.pos[coords] == 'object')
    },
    isKernelOccupied(anchor, kernel) {
        const coords = utils.kernel.parseInclusive(kernel);

        for (const coord of coords)
            if (this.isTileOccupied(this.relative(anchor, coord)) == true)
                return true;
        return false;
    },
    entityPosition(id) {
        return JSON.parse(`[${utils.getKeyByValue(this._map.data.pos, { type: "anchor", id })}]`)
    },

    // 
    // entity management
    //
    _ent: {
        type: {}
    },
    createSetType(name, set) {
        for (const piece of set) {
            piece.set = name;
            this._ent.type[piece.name] = piece;
        };
    },
    createEntity(base, entityData = {}) {
        const entities = this._map.data.entity,
            index = entities._index;
        entities[index] = utils.mergeDeep(this._ent.type[base], entityData);
        entities._index += 1;
        return index;
    },
    placeEntity(id, coords) {
        this._map.data.pos[coords] = id;
    },
    removeEntity(id) {
        delete this._map.data.pos[this.entityPosition(id)];
    },
    purgeEntity(id) {
        this.removeEntity(id);
        delete this._map.data.entity[id];
    },
    moveEntity(id, coords) {
        this.removeEntity(id);
        this.placeEntity(id, coords)
    },
    getStat(id, stat) {
        return this._map.data.entity[id][stat];
    },
    setStat(id, stat, value) {
        return this._map.data.entity[id][stat] = value;
    },
    modifyStat(id, stat, value) {
        return this.setStat(id, stat, this.getStat(id, stat) + value);
    }
};

export { gamestate };