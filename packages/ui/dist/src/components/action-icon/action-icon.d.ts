import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const actionIcon: import("tailwind-variants").TVReturnType<{
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
}, undefined, "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
export type ActionIconProps = Omit<VariantProps<typeof actionIcon>, "disabled" | "isLoading"> & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & React.HTMLAttributes<HTMLSpanElement> & {
    as?: "button" | "span";
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
};
export declare function ActionIcon({ as, type, children, className, isLoading, variant, size, disabled, ref, ...actionIconProps }: ActionIconProps): import("react/jsx-runtime").JSX.Element;
export {};
