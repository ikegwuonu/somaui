import type { ReactNode, MouseEvent } from "react";
import { type VariantProps } from "tailwind-variants";
declare const alert: import("tailwind-variants").TVReturnType<{
    color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
    };
    size: {
        sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
    };
    closable: {
        true: {};
    };
}, {
    root: string;
    bar: string;
    iconWrapper: string;
    content: string;
    closeWrapper: string;
}, undefined, {
    color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
    };
    size: {
        sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
    };
    closable: {
        true: {};
    };
}, {
    root: string;
    bar: string;
    iconWrapper: string;
    content: string;
    closeWrapper: string;
}, import("tailwind-variants").TVReturnType<{
    color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
    };
    size: {
        sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
    };
    closable: {
        true: {};
    };
}, {
    root: string;
    bar: string;
    iconWrapper: string;
    content: string;
    closeWrapper: string;
}, undefined, unknown, unknown, undefined>>;
export type AlertProps = {
    size?: VariantProps<typeof alert>["size"];
    color: "danger" | "info" | "success" | "warning";
    children: ReactNode;
    closable?: boolean;
    onClose?: (event: MouseEvent) => void;
    icon?: ReactNode;
    closeIcon?: ReactNode;
    className?: string;
    barClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
};
export declare function Alert({ size, color, children, closable, onClose, icon, closeIcon, className, barClassName, iconContainerClassName, iconClassName, }: AlertProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Alert {
    var displayName: string;
}
export {};
