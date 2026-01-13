import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';
import { l as labelStyles } from '../label-size-BuYQMot6.js';

declare const inputContainer: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
interface PasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix"> {
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
declare function Password({ className, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, prefix, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, prefixClassName, isPasswordVisible, visibilityToggleIcon, hideVisibilityToggleIcon, visibilityToggleIconClassName, ref, ...inputProps }: PasswordProps): react_jsx_runtime.JSX.Element;

export { Password, type PasswordProps };
