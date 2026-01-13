import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const badge: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
type BadgeProps = Omit<VariantProps<typeof badge>, 'renderAsDot' | 'enableOutlineRing'> & React.HTMLAttributes<HTMLSpanElement> & {
    renderAsDot?: boolean;
    enableOutlineRing?: boolean;
};
declare function Badge({ renderAsDot, size, color, variant, enableOutlineRing, children, className, ...props }: React.PropsWithChildren<BadgeProps>): react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps };
