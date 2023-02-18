function debugrender(){
    const sizex = rcpcd.gamestate._map.size[0],
        sizey = rcpcd.gamestate._map.size[1],
        map = rcpcd.gamestate._map.pos,
        entities = rcpcd.gamestate._ent;

    let image = "";
    for (let y = 0; y <= sizey; y++) for (let x = 0; x <= sizex; x++) {
        const curr = [x, y];

        image += (entities[map[curr]?.type]?.alt || ".")
        if (x == sizex) image += "\n"
    }
    document.body.innerText = image;
    window.requestAnimationFrame(debugrender);
}
