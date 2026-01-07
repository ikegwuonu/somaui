import React from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "@/lib/label-size";
declare const inputContainer: import("tailwind-variants").TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]", {
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix" | "suffix"> {
    type?: "text" | "email" | "number" | "tel" | "search" | "url" | "time" | "date" | "week" | "month" | "datetime-local";
    variant?: VariantProps<typeof inputContainer>["variant"];
    size?: VariantProps<typeof inputContainer>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    suffixClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    ref?: React.Ref<HTMLInputElement>;
}
export declare function Input({ className, type, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, prefix, suffix, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, prefixClassName, suffixClassName, ref, ...inputProps }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
