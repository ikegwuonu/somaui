import type { ReactNode } from "react";
import { type VariantProps } from "tailwind-variants";
declare const modal: import("tailwind-variants").TVReturnType<{
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
}, import("tailwind-variants").TVReturnType<{
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
export type ModalSize = ModalVariant["size"];
export type ModalProps = {
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
export declare function Modal({ isOpen, onClose, children, noGutter, className, size, customSize, overlayClassName, containerClassName, }: ModalProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Modal {
    var displayName: string;
}
export {};
