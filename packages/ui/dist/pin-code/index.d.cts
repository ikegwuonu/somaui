import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { InputHTMLAttributes, Dispatch, SetStateAction } from 'react';

declare const pinCode: tailwind_variants.TVReturnType<{
    variant: {
        flat: string;
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
}, undefined, "block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        flat: string;
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
        flat: string;
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
}, undefined, "block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type PinCodeVariant = VariantProps<typeof pinCode>;
interface PinCodeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value"> {
    setValue?: Dispatch<SetStateAction<string | number | undefined>>;
    type?: "text" | "number";
    mask?: boolean;
    length?: number;
    center?: boolean;
    placeholder?: string;
    size?: PinCodeVariant["size"];
    variant?: PinCodeVariant["variant"];
    error?: string;
    inputClassName?: string;
    errorClassName?: string;
    label?: string;
}
declare function PinCode({ type, defaultValue, mask, length, setValue, center, size, variant, placeholder, error, className, inputClassName, errorClassName, disabled, onChange, label, ...props }: PinCodeProps): react_jsx_runtime.JSX.Element;
declare namespace PinCode {
    var displayName: string;
}

export { PinCode, type PinCodeProps };
