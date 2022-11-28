import React, { CSSProperties } from 'react';

export const InnerToast: React.FC<ToastProps> = () => {
    return (
        <div>

        </div>
    )
}

export interface ToastProps {
    position?: 'top' | 'bottom' | 'center';
    message?: React.ReactNode;
    duration?: number;
    afterClose?: () => void;
    maskStyle?: CSSProperties;
    maskClassName?: string;
    visible?: boolean;
}