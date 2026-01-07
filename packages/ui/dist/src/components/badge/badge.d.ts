import React from 'react';
import { type VariantProps } from 'tailwind-variants';
declare const badge: import("tailwind-variants").TVReturnType<{
    variant: {
        solid: string;
        flat: string;
        outline: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    renderAsDot: {
        true: string;
    };
    enableOutlineRing: {
        true: string;
    };
}, undefined, "inline-flex items-center justify-center font-semibold leading-none rounded-full border-[length:var(--border-width)]", {
    variant: {
        solid: string;
        flat: string;
        outline: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    renderAsDot: {
        true: string;
    };
    enableOutlineRing: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        solid: string;
        flat: string;
        outline: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    renderAsDot: {
        true: string;
    };
    enableOutlineRing: {
        true: string;
    };
}, undefined, "inline-flex items-center justify-center font-semibold leading-none rounded-full border-[length:var(--border-width)]", unknown, unknown, undefined>>;
export type BadgeProps = Omit<VariantProps<typeof badge>, 'renderAsDot' | 'enableOutlineRing'> & React.HTMLAttributes<HTMLSpanElement> & {
    renderAsDot?: boolean;
    enableOutlineRing?: boolean;
};
export declare function Badge({ renderAsDot, size, color, variant, enableOutlineRing, children, className, ...props }: React.PropsWithChildren<BadgeProps>): import("react/jsx-runtime").JSX.Element;
export {};
