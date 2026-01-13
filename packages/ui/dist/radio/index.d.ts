import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { InputHTMLAttributes, ReactNode, Ref } from 'react';
import { l as labelStyles } from '../label-size-BuYQMot6.js';

declare const radio: tailwind_variants.TVReturnType<{
    variant: {
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]", {
    variant: {
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type RadioVariant = VariantProps<typeof radio>;
interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: RadioVariant["variant"];
    size?: RadioVariant["size"];
    labelPlacement?: "left" | "right";
    labelWeight?: keyof typeof labelStyles.weight;
    disabled?: boolean;
    label?: ReactNode;
    error?: string;
    helperText?: ReactNode;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    ref?: Ref<HTMLInputElement>;
}
declare function Radio({ variant, size, labelPlacement, labelWeight, label, disabled, error, helperText, className, labelClassName, inputClassName, errorClassName, helperClassName, ref, value, checked, onChange, ...radioProps }: RadioProps): react_jsx_runtime.JSX.Element;

export { Radio, type RadioProps };
