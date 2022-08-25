import { Numeric } from "./format";

export const isPromise = (obj: unknown): obj is Promise<unknown> => {
    return (
        !!obj && typeof obj === 'object' && typeof (obj as any).then === 'function'
    )
}

export const isDef = <T>(val: T): val is NonNullable<T> => {
    return val !== undefined && val !== null;
}

export const isNumeric = (val: Numeric): val is string => {
    return typeof val === 'number' ||  /^\d+(\.\d+)?$/.test(val);
}