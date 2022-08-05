import React from 'react';
import './index.scss';
import { ButtonNativeType, ButtonSize, ButtonType } from './types';

export interface ButtonProps {
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
}

const Button = (props: ButtonProps) => {
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
        children
    } = props;
    return (
        <button className='xie-btn'>
            {children}
        </button>
    )
}

export default Button;