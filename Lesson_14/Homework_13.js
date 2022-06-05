var deepClone = obj => { //Задание 1
    if (obj === null) return null;
    var clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
        key =>
            (clone[key] =
                typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]));
    return Array.isArray(obj) && obj.length
        ? (clone.length = obj.length) && Array.from(clone)
        : Array.isArray(obj)
            ? Array.from(obj)
            : clone;
};

const isEqual = (a, b) => { //Задание 2
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => isEqual(a[k], b[k]));
};


