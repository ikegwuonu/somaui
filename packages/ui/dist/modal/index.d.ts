import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { ReactNode } from 'react';

declare const modal: tailwind_variants.TVReturnType<{
    size: {
        sm: {
            panel: string;
        };
        md: {
            panel: string;
        };
        lg: {
            panel: string;
        };
        full: {
            panel: string;
        };
    };
}, {
    root: string;
    area: string;
    overlay: string;
    panel: string;
}, undefined, {
    size: {
        sm: {
            panel: string;
        };
        md: {
            panel: string;
        };
        lg: {
            panel: string;
        };
        full: {
            panel: string;
        };
    };
}, {
    root: string;
    area: string;
    overlay: string;
    panel: string;
}, tailwind_variants.TVReturnType<{
    size: {
        sm: {
            panel: string;
        };
        md: {
            panel: string;
        };
        lg: {
            panel: string;
        };
        full: {
            panel: string;
        };
    };
}, {
    root: string;
    area: string;
    overlay: string;
    panel: string;
}, undefined, unknown, unknown, undefined>>;
type ModalVariant = VariantProps<typeof modal>;
type ModalSize = ModalVariant["size"];
type ModalProps = {
    isOpen: boolean;
    onClose(): void;
    size?: ModalSize;
    noGutter?: boolean;
    customSize?: number;
    overlayClassName?: string;
    containerClassName?: string;
    className?: string;
    children?: ReactNode;
};
declare function Modal({ isOpen, onClose, children, noGutter, className, size, customSize, overlayClassName, containerClassName, }: ModalProps): react_jsx_runtime.JSX.Element;
declare namespace Modal {
    var displayName: string;
}

export { Modal, type ModalProps, type ModalSize };
