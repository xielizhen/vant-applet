import React from 'react';
import { createNamespace } from '../../utils/create';
import { addUnit, getSizeStyle } from '../../utils/format';
import './index.less';

const [name, bem] = createNamespace('loading');

export type LoadingType = 'circular' | 'spinner';
export type LoadingProps = {
    color?: string;
    vertical?: boolean;
    textSize?: string | number;
    textColor?: string;
    size?: string | number;
    type?: LoadingType;
}

const SpinIcon = () => {
    return (
        <>
            {Array(12)
                .fill(null)
                .map((_, index) => <i key={index} className={bem('line', String(index + 1))} />)
            }
        </>
    )
}

const CircularIcon = () => {
    return (
        <svg className={bem('circular')} viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" />
        </svg>
    )
}

const Loading: React.FC<LoadingProps> = (props) => {
    const { type, vertical, textSize, textColor, color, size } = props;
    return (
        <div className={bem([type, { vertical }])}>
            <span
                className={bem('spinner', type)}
                style={{
                    color: color,
                    ...getSizeStyle(size),
                }}
            >
                {type === 'circular' ? (
                    <CircularIcon />
                ) : (
                    <SpinIcon />
                )}
            </span>
            <span
                className={bem('text')}
                style={{
                    fontSize: addUnit(textSize),
                    color: textColor ?? color
                }}
            >
                加载中
            </span>
        </div>
    )
}

export default Loading;