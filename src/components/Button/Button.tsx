import React, { CSSProperties, useImperativeHandle, useRef, useState } from 'react';
import { ButtonNativeType, ButtonSize, ButtonType } from './types';
import { createNamespace } from '../../utils/create';
import { BORDER_SURROUND } from '../../utils/constant';
import './index.less';
import { XieComponent } from '../../types/base';
import { isPromise } from '../../utils';

const [name, bem] = createNamespace('button');

type NativeButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>
export type ButtonRef = {
    nativeElement: HTMLButtonElement | null
}

export type ButtonProps = XieComponent & {
    type?: ButtonType;
    size?: ButtonSize;
    color?: string;
    nativeType?: ButtonNativeType;
    block?: boolean;
    plain?: boolean;
    square?: boolean;
    round?: boolean;
    disabled?: boolean;
    hairline?: boolean;
    loading?: boolean;
    loadingSize?: string | number;
    url?: string;
    to?: string;
    replace?: string;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void> | unknown;
} & Pick<NativeButtonProps, 'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd'>

const Button = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
    const {
        type = 'primary',
        size = 'normal',
        color,
        nativeType,
        block,
        plain,
        square,
        round,
        disabled,
        hairline,
        children,
        customStyle,
        className,
    } = props;
    const [innerLoading, setInnerLoading] = useState(false);
    const loading = innerLoading || props.loading;
    const nativeButtonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
        get nativeElement() {
            return nativeButtonRef.current
        },
    }))

    const classes = bem([
        type,
        size,
        {
            plain,
            disabled,
            hairline,
            square,
            round,
            block
        }
    ]) + ` ${hairline ? BORDER_SURROUND : ''}`;

    const genStyle = (): CSSProperties => {
        const style: CSSProperties = {};
        if (color) {
            style.color = plain ? color : 'white';
            if (!plain) {
                style.background = color;
            }
            if (color.includes('gradient')) {
                style.border = 0;
            } else {
                style.borderColor = color;
            }
        }

        return {
            ...style,
            ...(customStyle || {})
        }
    }

    const handleClick = async (e: any) => {
        if (!props.onClick) return;
        if (loading || disabled) return;
        
        const promise = props.onClick(e);
        if (isPromise(promise)) {
            try {
                setInnerLoading(true);
                await promise;
                setInnerLoading(false);
            } catch (err) {
                setInnerLoading(false);
                throw err;
            }
        }
    }

    return (
        <button
            ref={nativeButtonRef}
            className={`${classes} ${className}`}
            style={genStyle()}
            onClick={handleClick}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onTouchStart={props.onTouchStart}
            onTouchEnd={props.onTouchEnd}
        >
            {children}
        </button>
    )
})

export default Button;