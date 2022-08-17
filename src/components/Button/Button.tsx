import React from 'react';
import { ButtonNativeType, ButtonSize, ButtonType } from './types';
import { createNamespace } from '../../utils/create';
import { BORDER_SURROUND } from '../../utils/constant';

import './index.less';

const [name, bem] = createNamespace('button');

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
        type = 'default',
        size = 'normal',
        color,
        nativeType,
        block,
        plain,
        square,
        round,
        disabled,
        hairline,
        children
    } = props;

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
    ]) + ` ${ hairline ? BORDER_SURROUND : ''}`

    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button;