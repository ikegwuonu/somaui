import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React, { ElementType } from 'react';

declare const button: tailwind_variants.TVReturnType<{
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
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", {
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
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type ButtonProps<T extends ElementType = "button"> = VariantProps<typeof button> & {
    as?: T;
    isLoading?: boolean;
    loader?: React.ReactNode;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "className" | "ref"> & {
    className?: string;
};
declare const Button: React.ForwardRefExoticComponent<VariantProps<tailwind_variants.TVReturnType<{
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
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", {
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
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", unknown, unknown, undefined>>> & {
    as?: "button" | undefined;
    isLoading?: boolean;
    loader?: React.ReactNode;
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "ref" | "as"> & {
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;

export { Button, type ButtonProps };
