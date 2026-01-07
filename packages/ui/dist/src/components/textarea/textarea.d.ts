import React from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "@/lib/label-size";
declare const textarea: import("tailwind-variants").TVReturnType<{
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
    clearable: {
        true: string;
    };
}, undefined, "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
export interface TextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
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
export declare function Textarea({ variant, size, labelWeight, cols, rows, label, error, clearable, onClear, readOnly, disabled, className, labelClassName, textareaClassName, helperClassName, errorClassName, helperText, maxLength, placeholder, renderCharacterCount, ref, ...textareaProps }: TextareaProps): import("react/jsx-runtime").JSX.Element;
export {};
