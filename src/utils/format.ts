import { CSSProperties } from "react";
import { isDef, isNumeric } from ".";

export type Numeric = number | string;

export function addUnit(value?: Numeric): string | undefined {
    if (isDef(value)) {
        return isNumeric(value) ? `${value}px` : String(value);
    }
    return undefined;
}

export function getSizeStyle (originSize?: Numeric | Numeric[]): CSSProperties {
    if (isDef(originSize)) {
        if (Array.isArray(originSize)) {
            return {
                width: addUnit(originSize[0]),
                height: addUnit(originSize[1])
            };
        }
        const size = addUnit(originSize)
        return {
            width: size,
            height: size
        }
    }
    return {};
}

