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
export interface PasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix"> {
    variant?: VariantProps<typeof inputContainer>["variant"];
    size?: VariantProps<typeof inputContainer>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    prefix?: React.ReactNode;
    visibilityToggleIcon?(visible: boolean): React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    isPasswordVisible?: boolean;
    visibilityToggleIconClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    hideVisibilityToggleIcon?: boolean;
    ref?: React.Ref<HTMLInputElement>;
}
export declare function Password({ className, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, prefix, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, prefixClassName, isPasswordVisible, visibilityToggleIcon, hideVisibilityToggleIcon, visibilityToggleIconClassName, ref, ...inputProps }: PasswordProps): import("react/jsx-runtime").JSX.Element;
export {};
