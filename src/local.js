import { Game } from "./core.js";
import { piecesDir } from "./pieces.js"

var game = new Game([2,2])

game.createPiece("pawn", piecesDir.pawn)

// expose
window.Piece = Piece;