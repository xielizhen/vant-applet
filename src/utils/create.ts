export type Mod = string | { [key: string]: any};
export type Mods = Mod | Mod[];

function genBem (name: string, mods?: Mods): string {
    if (!mods) {
        return '';
    }
    if (typeof mods === 'string') {
        return ` ${name}--${mods}`;
    }
    if (Array.isArray(mods)) {
        return (mods as Mod[])?.reduce((ret: string, item: any) => ret + genBem(name, item), '');
    }
    return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name, key): ''), '');
}

export function createBem (name: string) {
    return (el?: Mods, mods?: Mods): string => {
        if (el && typeof el !== 'string') {
            mods = el;
            el = '';
        }
        el = el ? `${name}__${el}` : name;
        return `${el}${genBem(el, mods)}`;
    }
}

export function createNamespace (name: string) {
    const prefixedName = `xie-${name}`;
    return [
        prefixedName,
        createBem(prefixedName)
    ] as const;
}