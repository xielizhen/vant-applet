import React from 'react';
import { ButtonNativeType, ButtonSize, ButtonType } from './types';

import './index.less';

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
        <button className='xie-btn xie-btn--success xie-btn--hairline xie-hairline xie-hairline--surround xie-btn--disabled'>
            {children}
        </button>
    )
}

export default Button;