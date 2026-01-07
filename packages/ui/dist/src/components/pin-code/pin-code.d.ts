import { type Dispatch, type SetStateAction, type InputHTMLAttributes } from "react";
import { type VariantProps } from "tailwind-variants";
declare const pinCode: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export interface PinCodeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value"> {
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
export declare function PinCode({ type, defaultValue, mask, length, setValue, center, size, variant, placeholder, error, className, inputClassName, errorClassName, disabled, onChange, label, ...props }: PinCodeProps): import("react/jsx-runtime").JSX.Element;
export declare namespace PinCode {
    var displayName: string;
}
export {};
