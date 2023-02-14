export const utils = {
    isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    },
    mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();

        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    this.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }

        return this.mergeDeep(target, ...sources);
    },
    getKeyByValue(object, value) {
        return Object.keys(object).find(key => this.deepEqual(object[key], value));
    },
    deepEqual(x, y) {
        const ok = Object.keys, tx = typeof x, ty = typeof y;
        return x && y && tx === 'object' && tx === ty ? (
            ok(x).length === ok(y).length &&
            ok(x).every(key => this.deepEqual(x[key], y[key]))
        ) : (x === y);
    },
    kernel: {
        getAnchor(k) {
            for (const [y, row] of k.entries()) {
                const x = row.indexOf("o");
                if (x !== -1) return { x, y };
            };
        },
        parse(k) { // kernel rel pattern
            const anchor = this.getAnchor(k),
                kernelset = [];

            for (const [j, row] of k.entries()) for (const [i, char] of row.split("").entries()) {
                if (char === "x") kernelset.push([i - anchor.x, j - anchor.y]);
            };
            return kernelset;
        },
        parseInclusive(k) { // include anchor in pattern
            const ic = this.parse(k);
            return (ic.push([0, 0]), ic);
        }
    }
}