import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { ReactNode, MouseEvent } from 'react';

declare const alert: tailwind_variants.TVReturnType<{
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
}, tailwind_variants.TVReturnType<{
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
type AlertProps = {
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
declare function Alert({ size, color, children, closable, onClose, icon, closeIcon, className, barClassName, iconContainerClassName, iconClassName, }: AlertProps): react_jsx_runtime.JSX.Element;
declare namespace Alert {
    var displayName: string;
}

export { Alert, type AlertProps };
