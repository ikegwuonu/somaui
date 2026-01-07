import type { ReactNode } from "react";
import { type VariantProps } from "tailwind-variants";
declare const drawer: import("tailwind-variants").TVReturnType<{
    placement: {
        top: {
            panel: string;
            resizer: string;
        };
        right: {
            panel: string;
            resizer: string;
        };
        bottom: {
            panel: string;
            resizer: string;
        };
        left: {
            panel: string;
            resizer: string;
        };
    };
    size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
    };
}, {
    root: string;
    overlay: string;
    panel: string;
    resizer: string;
}, undefined, {
    placement: {
        top: {
            panel: string;
            resizer: string;
        };
        right: {
            panel: string;
            resizer: string;
        };
        bottom: {
            panel: string;
            resizer: string;
        };
        left: {
            panel: string;
            resizer: string;
        };
    };
    size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
    };
}, {
    root: string;
    overlay: string;
    panel: string;
    resizer: string;
}, import("tailwind-variants").TVReturnType<{
    placement: {
        top: {
            panel: string;
            resizer: string;
        };
        right: {
            panel: string;
            resizer: string;
        };
        bottom: {
            panel: string;
            resizer: string;
        };
        left: {
            panel: string;
            resizer: string;
        };
    };
    size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
    };
}, {
    root: string;
    overlay: string;
    panel: string;
    resizer: string;
}, undefined, unknown, unknown, undefined>>;
type DrawerVariant = VariantProps<typeof drawer>;
export declare function isPlacementOnYAxis(placement: DrawerVariant["placement"]): boolean;
export type DrawerSize = DrawerVariant["size"];
export type DrawerProps = {
    isOpen: boolean;
    onClose(): void;
    placement?: DrawerVariant["placement"];
    size?: DrawerSize;
    customSize?: number;
    enableResizer?: boolean;
    overlayClassName?: string;
    containerClassName?: string;
    resizerClassName?: string;
    className?: string;
    children?: ReactNode;
};
export declare function Drawer({ isOpen, onClose, size, placement, customSize, enableResizer, overlayClassName, containerClassName, resizerClassName, className, children, }: DrawerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Drawer {
    var displayName: string;
}
export {};
