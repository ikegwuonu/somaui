import React from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "@/lib/label-size";
declare const fileInput: import("tailwind-variants").TVReturnType<{
    variant: {
        outline: {
            container: string;
        };
        text: {
            container: string;
        };
    };
    size: {
        sm: {
            container: string;
            button: string;
        };
        md: {
            container: string;
            button: string;
        };
        lg: {
            container: string;
            button: string;
        };
    };
    disabled: {
        true: {
            container: string;
            input: string;
            button: string;
        };
    };
    error: {
        true: {
            container: string;
        };
    };
    clearable: {
        true: {
            input: string;
        };
    };
}, {
    container: string;
    input: string;
    button: string;
}, undefined, {
    variant: {
        outline: {
            container: string;
        };
        text: {
            container: string;
        };
    };
    size: {
        sm: {
            container: string;
            button: string;
        };
        md: {
            container: string;
            button: string;
        };
        lg: {
            container: string;
            button: string;
        };
    };
    disabled: {
        true: {
            container: string;
            input: string;
            button: string;
        };
    };
    error: {
        true: {
            container: string;
        };
    };
    clearable: {
        true: {
            input: string;
        };
    };
}, {
    container: string;
    input: string;
    button: string;
}, import("tailwind-variants").TVReturnType<{
    variant: {
        outline: {
            container: string;
        };
        text: {
            container: string;
        };
    };
    size: {
        sm: {
            container: string;
            button: string;
        };
        md: {
            container: string;
            button: string;
        };
        lg: {
            container: string;
            button: string;
        };
    };
    disabled: {
        true: {
            container: string;
            input: string;
            button: string;
        };
    };
    error: {
        true: {
            container: string;
        };
    };
    clearable: {
        true: {
            input: string;
        };
    };
}, {
    container: string;
    input: string;
    button: string;
}, undefined, unknown, unknown, undefined>>;
export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    variant?: VariantProps<typeof fileInput>["variant"];
    size?: VariantProps<typeof fileInput>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    ref?: React.Ref<HTMLInputElement>;
}
export declare function FileInput({ className, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, ref, ...inputProps }: FileInputProps): import("react/jsx-runtime").JSX.Element;
export {};
