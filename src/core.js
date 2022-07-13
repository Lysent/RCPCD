/**
 * does the actual game stuff
 */
import './math.js'

class Game {
	constructor(size, prefab) {
		this.size = size;
		this._map.pieces = prefab ? prefab : {};
	}

	addPlayer(name, faction, team) {
		this.players[name] = { faction, team };
		this.turnOrder.push(name);
	}

	createPiece(name, properties){
		this._pieceDir[name] = properties
	}

	placePiece(coords, pieceName) {
		this._map.pieces[coords] = pieceName;
	}

	movePiece(coords, newCoords){
		const cp = this._map.pieces[coords];
		if(cp == undefined) return new TypeError(`read undefined at coords '${coords}' in map`);
	}

	_map = {
		pieces: {},
		free(coords) {
			console.log(this.this)
		}
	}

	turnOrder = []
	players = {}
	_pieceDir = {}
}

export { Game };

/**
 * The Modding API
 * * * * * * * * *
 * Everything in the RCPCD core code is considered as an addition.
 * Even the base game itself is a mod! Here we mildld document how
 * to create your own games based on the base "limitless chess"
 * idea.
 * 
 * 
 * 
 * Anatomy of a Piece
 * * * * * * * * * * *
 * The creation of game pieces is pretty simple. It is probably
 * best to learn how to make one by example, so you can read the
 * included pieces' code in `pieces.js`
 * 
 *
 */