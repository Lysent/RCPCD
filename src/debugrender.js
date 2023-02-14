function debugrender(){
    const sizex = rcpcd.gamestate._map.size[0],
        sizey = rcpcd.gamestate._map.size[1],
        data = rcpcd.gamestate._map.data

    let image = "";
    for (let y = 0; y <= sizey; y++) for (let x = 0; x <= sizex; x++) {
        const curr = [x, y];

        image += (data.entity[data.pos[curr]]?.alt || ".")
        if (x == sizex) image += "\n"
    }
    document.body.innerText = image;
    window.requestAnimationFrame(debugrender);
}
