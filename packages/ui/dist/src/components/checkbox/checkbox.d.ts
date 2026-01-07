import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "@/lib/label-size";
declare const checkbox: import("tailwind-variants").TVReturnType<{
    variant: {
        outline: string;
        flat: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        outline: string;
        flat: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        outline: string;
        flat: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type CheckboxVariant = VariantProps<typeof checkbox>;
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: CheckboxVariant["variant"];
    size?: CheckboxVariant["size"];
    labelWeight?: keyof typeof labelStyles.weight;
    labelPlacement?: "left" | "right";
    disabled?: boolean;
    label?: ReactNode;
    error?: string;
    helperText?: ReactNode;
    iconClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    className?: string;
    indeterminate?: boolean;
    ref?: Ref<HTMLInputElement>;
}
export declare function Checkbox({ variant, size, labelPlacement, labelWeight, label, disabled, error, helperText, iconClassName, labelClassName, inputClassName, errorClassName, helperClassName, indeterminate, className, ref, value, checked, onChange, ...checkboxProps }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
