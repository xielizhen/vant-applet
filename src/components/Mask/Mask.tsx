import React, { useMemo, useRef } from 'react';
import { useLockScroll } from '../../hooks/useLockScroll';

const defaultProps: MaskProps = {
    visible: true,
    destoryOnClose: false,
    forceRender: false,
    color: 'black',
    opacity: 'default',
    disableBodyScroll: true,
    getContainer: null,
    stopPropagation: ['click']
}
const Mask: React.FC<MaskProps> = (props) => {
    props = {
        ...defaultProps,
        ...props
    }
    const ref = useRef<HTMLDivElement>(null);
    useLockScroll(ref, !!props.visible && !!props.disableBodyScroll);

    const background = useMemo(() => {
        
    }, [props.color, props.opacity]);

    return (
        <div>

        </div>
    )
}

export default Mask;

export type MaskProps = {
    visible?: boolean;
    destoryOnClose?: boolean;
    disableBodyScroll?: boolean;
    forceRender?: boolean;
    color?: string;
    opacity?: 'default' | 'thin' | 'thick' | 'number';
    stopPropagation?: string[];
    getContainer?: HTMLElement | (() => HTMLElement) | null;
    onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    afterClose?: () => void;
    afterShow?: () => void;
}