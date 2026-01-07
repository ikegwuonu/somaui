import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const switchTV: import("tailwind-variants").TVReturnType<{
    variant: {
        flat: {
            container: string;
            knob: string;
        };
        outline: {
            container: string;
            knob: string;
        };
    };
    size: {
        sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
    };
    labelPlacement: {
        left: {
            label: string;
        };
        right: {
            label: string;
        };
    };
    labelWeight: {
        normal: {
            label: string;
        };
        medium: {
            label: string;
        };
        semibold: {
            label: string;
        };
        bold: {
            label: string;
        };
    };
    disabled: {
        true: {
            container: string;
            knob: string;
            label: string;
        };
    };
}, {
    container: string;
    knob: string;
    input: string;
    icon: string;
    label: string;
}, undefined, {
    variant: {
        flat: {
            container: string;
            knob: string;
        };
        outline: {
            container: string;
            knob: string;
        };
    };
    size: {
        sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
    };
    labelPlacement: {
        left: {
            label: string;
        };
        right: {
            label: string;
        };
    };
    labelWeight: {
        normal: {
            label: string;
        };
        medium: {
            label: string;
        };
        semibold: {
            label: string;
        };
        bold: {
            label: string;
        };
    };
    disabled: {
        true: {
            container: string;
            knob: string;
            label: string;
        };
    };
}, {
    container: string;
    knob: string;
    input: string;
    icon: string;
    label: string;
}, import("tailwind-variants").TVReturnType<{
    variant: {
        flat: {
            container: string;
            knob: string;
        };
        outline: {
            container: string;
            knob: string;
        };
    };
    size: {
        sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
    };
    labelPlacement: {
        left: {
            label: string;
        };
        right: {
            label: string;
        };
    };
    labelWeight: {
        normal: {
            label: string;
        };
        medium: {
            label: string;
        };
        semibold: {
            label: string;
        };
        bold: {
            label: string;
        };
    };
    disabled: {
        true: {
            container: string;
            knob: string;
            label: string;
        };
    };
}, {
    container: string;
    knob: string;
    input: string;
    icon: string;
    label: string;
}, undefined, unknown, unknown, undefined>>;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: React.ReactNode;
    labelPlacement?: VariantProps<typeof switchTV>["labelPlacement"];
    labelWeight?: VariantProps<typeof switchTV>["labelWeight"];
    size?: VariantProps<typeof switchTV>["size"];
    disabled?: boolean;
    variant?: VariantProps<typeof switchTV>["variant"];
    onIcon?: React.ReactNode;
    offIcon?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    switchClassName?: string;
    switchKnobClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    className?: string;
    ref?: React.Ref<HTMLInputElement>;
}
export declare function Switch({ label, labelPlacement, labelWeight, size, variant, disabled, onIcon, offIcon, error, helperText, className, labelClassName, switchClassName, switchKnobClassName, errorClassName, helperClassName, ref, checked, defaultChecked, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
