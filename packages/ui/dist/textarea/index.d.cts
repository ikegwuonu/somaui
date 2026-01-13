import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';
import { l as labelStyles } from '../label-size-BuYQMot6.cjs';

declare const textarea: tailwind_variants.TVReturnType<{
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
    clearable: {
        true: string;
    };
}, undefined, "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
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
    clearable: {
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
    clearable: {
        true: string;
    };
}, undefined, "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
interface TextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    rows?: number;
    cols?: number;
    maxLength?: number;
    disabled?: boolean;
    children?: React.ReactNode;
    size?: VariantProps<typeof textarea>["size"];
    variant?: VariantProps<typeof textarea>["variant"];
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    renderCharacterCount?({ characterCount, maxLength, }: {
        characterCount?: number;
        maxLength?: number;
    }): React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    textareaClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    ref?: React.Ref<HTMLTextAreaElement>;
}
declare function Textarea({ variant, size, labelWeight, cols, rows, label, error, clearable, onClear, readOnly, disabled, className, labelClassName, textareaClassName, helperClassName, errorClassName, helperText, maxLength, placeholder, renderCharacterCount, ref, ...textareaProps }: TextareaProps): react_jsx_runtime.JSX.Element;

export { Textarea, type TextareaProps };
