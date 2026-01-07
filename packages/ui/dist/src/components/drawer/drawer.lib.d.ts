import { MouseEvent } from 'react';
export type ResizeProps = {
    placement: 'left' | 'right' | 'top' | 'bottom';
    customSize?: number;
};
export declare function useResizeHandler({ placement }: ResizeProps): {
    handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
    width: number;
    containerRef: import("react").RefObject<HTMLDivElement | null>;
};
