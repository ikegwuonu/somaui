import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const actionIcon: tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type ActionIconProps = Omit<VariantProps<typeof actionIcon>, "disabled" | "isLoading"> & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & React.HTMLAttributes<HTMLSpanElement> & {
    as?: "button" | "span";
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
};
declare function ActionIcon({ as, type, children, className, isLoading, variant, size, disabled, ref, ...actionIconProps }: ActionIconProps): react_jsx_runtime.JSX.Element;

export { ActionIcon, type ActionIconProps };
