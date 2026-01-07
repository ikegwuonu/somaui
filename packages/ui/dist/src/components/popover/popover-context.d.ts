import { type CSSProperties, type Dispatch, type SetStateAction, type RefObject, type ReactNode } from 'react';
import { type Placement, type Strategy } from '@floating-ui/react';
import type { Size } from './popover-content';
declare const tooltipAnimation: {
    readonly fadeIn: {
        readonly initial: {
            readonly opacity: 0;
        };
        readonly close: {
            readonly opacity: 0;
        };
    };
    readonly zoomIn: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "scale(0.96)";
        };
        readonly close: {
            readonly opacity: 0;
            readonly transform: "scale(0.96)";
        };
    };
    readonly slideIn: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "translateY(4px)";
        };
        readonly close: {
            readonly opacity: 0;
            readonly transform: "translateY(4px)";
        };
    };
};
type CommonTypes = {
    showArrow?: boolean;
    enableOverlay?: boolean;
    size?: Size;
    arrowClassName?: string;
    overlayClassName?: string;
};
type PopoverContextProps = {
    open: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isMounted: boolean;
    styles: CSSProperties;
    getReferenceProps: (userProps?: any) => Record<string, unknown>;
    getFloatingProps: (userProps?: any) => Record<string, unknown>;
    refs: any;
    x: number | null;
    y: number | null;
    strategy: Strategy;
    arrowRef: RefObject<SVGSVGElement | null>;
    context: any;
} & CommonTypes;
export type PopoverProviderProps = {
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    placement?: Placement;
    animation?: keyof typeof tooltipAnimation;
    gap?: number;
} & CommonTypes;
export declare function PopoverProvider({ value, children, }: {
    value: PopoverProviderProps;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function usePopover(): PopoverContextProps;
export {};
