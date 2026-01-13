import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const switchTV: tailwind_variants.TVReturnType<{
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
}, tailwind_variants.TVReturnType<{
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
interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
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
declare function Switch({ label, labelPlacement, labelWeight, size, variant, disabled, onIcon, offIcon, error, helperText, className, labelClassName, switchClassName, switchKnobClassName, errorClassName, helperClassName, ref, checked, defaultChecked, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

export { Switch, type SwitchProps };
