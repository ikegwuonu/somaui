import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "@/lib/label-size";
declare const radio: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
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
export declare function Radio({ variant, size, labelPlacement, labelWeight, label, disabled, error, helperText, className, labelClassName, inputClassName, errorClassName, helperClassName, ref, value, checked, onChange, ...radioProps }: RadioProps): import("react/jsx-runtime").JSX.Element;
export {};
