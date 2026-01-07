import React, { type ElementType } from "react";
import { type VariantProps } from "tailwind-variants";
declare const button: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export type ButtonProps<T extends ElementType = "button"> = VariantProps<typeof button> & {
    as?: T;
    isLoading?: boolean;
    loader?: React.ReactNode;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "className" | "ref"> & {
    className?: string;
};
export declare const Button: React.ForwardRefExoticComponent<VariantProps<import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "as" | "ref"> & {
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
export {};
