import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';
import { l as labelStyles } from '../label-size-BuYQMot6.js';

declare const fileInput: tailwind_variants.TVReturnType<{
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
}, tailwind_variants.TVReturnType<{
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
interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
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
declare function FileInput({ className, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, ref, ...inputProps }: FileInputProps): react_jsx_runtime.JSX.Element;

declare const uploadZone: tailwind_variants.TVReturnType<{
    variant: {
        outline: {
            uploadZoneArea: string;
        };
        flat: {
            uploadZoneArea: string;
        };
    };
    size: {
        sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
    };
    isDragging: {
        true: {
            uploadZoneArea: string;
        };
    };
    disabled: {
        true: {
            uploadZoneArea: string;
            input: string;
        };
    };
    error: {
        true: {
            uploadZoneArea: string;
        };
    };
}, {
    root: string;
    uploadZoneArea: string;
    input: string;
    content: string;
    icon: string;
    text: string;
    previewContainer: string;
    previewGrid: string;
    previewItem: string;
    previewImage: string;
    previewRemoveButton: string;
}, undefined, {
    variant: {
        outline: {
            uploadZoneArea: string;
        };
        flat: {
            uploadZoneArea: string;
        };
    };
    size: {
        sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
    };
    isDragging: {
        true: {
            uploadZoneArea: string;
        };
    };
    disabled: {
        true: {
            uploadZoneArea: string;
            input: string;
        };
    };
    error: {
        true: {
            uploadZoneArea: string;
        };
    };
}, {
    root: string;
    uploadZoneArea: string;
    input: string;
    content: string;
    icon: string;
    text: string;
    previewContainer: string;
    previewGrid: string;
    previewItem: string;
    previewImage: string;
    previewRemoveButton: string;
}, tailwind_variants.TVReturnType<{
    variant: {
        outline: {
            uploadZoneArea: string;
        };
        flat: {
            uploadZoneArea: string;
        };
    };
    size: {
        sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
    };
    isDragging: {
        true: {
            uploadZoneArea: string;
        };
    };
    disabled: {
        true: {
            uploadZoneArea: string;
            input: string;
        };
    };
    error: {
        true: {
            uploadZoneArea: string;
        };
    };
}, {
    root: string;
    uploadZoneArea: string;
    input: string;
    content: string;
    icon: string;
    text: string;
    previewContainer: string;
    previewGrid: string;
    previewItem: string;
    previewImage: string;
    previewRemoveButton: string;
}, undefined, unknown, unknown, undefined>>;
interface UploadZoneProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange" | "value" | "placeholder" | "onDrop"> {
    variant?: VariantProps<typeof uploadZone>["variant"];
    size?: VariantProps<typeof uploadZone>["size"];
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    uploadZoneClassName?: string;
    contentClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    previewClassName?: string;
    className?: string;
    multiple?: boolean;
    accept?: string;
    placeholder?: React.ReactNode;
    icon?: React.ReactNode;
    value?: FileList | File[] | null;
    onChange?: (files: FileList | null) => void;
    onDrop?: (files: FileList) => void;
    ref?: React.Ref<HTMLInputElement>;
    name?: string;
}
declare function UploadZone({ className, variant, size, disabled, label, labelWeight, error, helperText, labelClassName, uploadZoneClassName, contentClassName, helperClassName, errorClassName, previewClassName, multiple, accept, placeholder, icon, value, onChange, onDrop, name, ref, ...inputProps }: UploadZoneProps): react_jsx_runtime.JSX.Element;

export { FileInput, type FileInputProps, UploadZone, type UploadZoneProps };
