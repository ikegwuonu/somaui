import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { InputHTMLAttributes, ReactNode, Ref } from 'react';
import { l as labelStyles } from '../label-size-BuYQMot6.js';

declare const checkbox: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
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
declare function Checkbox({ variant, size, labelPlacement, labelWeight, label, disabled, error, helperText, iconClassName, labelClassName, inputClassName, errorClassName, helperClassName, indeterminate, className, ref, value, checked, onChange, ...checkboxProps }: CheckboxProps): react_jsx_runtime.JSX.Element;

export { Checkbox, type CheckboxProps };
