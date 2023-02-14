export default function ({ gs, ev }) {
    gs.createSetType("spanish", [
        {
            name: "king",
            movement: {
                kernel: [
                    "xxx",
                    "xox",
                    "xxx"
                ],
                linear: false,
                diagonal: false
            },
            funds: 0,
            alt: "♚"
        },
        {
            name: "queen",
            movement: {
                kernel: null,
                linear: true,
                diagonal: true
            },
            funds: 0,
            alt: "♛"
        },
        {
            name: "knight",
            movement: {
                kernel: [
                    " x   x ",
                    "x     x",
                    "   o   ",
                    "x     X",
                    " x   x"
                ],
                linear: false,
                diagonal: false
            },
            funds: 0,
            alt: "♞"
        },
        {
            name: "bishop",
            movement: {
                kernel: null,
                linear: false,
                diagonal: true
            },
            funds: 0,
            alt: "♝"
        },
        {
            name: "rook",
            movement: {
                kernel: null,
                linear: true,
                diagonal: false
            },
            funds: 0,
            alt: "♜"
        },
        {
            name: "pawn",
            movement: {
                kernel: [
                    "x",
                    "o"
                ],
                linear: false,
                diagonal: false
            },
            capture: {
                kernel: [
                    "x x",
                    " o "
                ]
            },
            funds: 0,
            alt: "♟︎"
        }
    ]);
};