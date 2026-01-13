import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { ReactNode } from 'react';

declare const drawer: tailwind_variants.TVReturnType<{
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
}, tailwind_variants.TVReturnType<{
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
type DrawerSize = DrawerVariant["size"];
type DrawerProps = {
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
declare function Drawer({ isOpen, onClose, size, placement, customSize, enableResizer, overlayClassName, containerClassName, resizerClassName, className, children, }: DrawerProps): react_jsx_runtime.JSX.Element;
declare namespace Drawer {
    var displayName: string;
}

export { Drawer, type DrawerProps, type DrawerSize };
