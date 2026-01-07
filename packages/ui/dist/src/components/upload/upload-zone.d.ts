import React from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "@/lib/label-size";
declare const uploadZone: import("tailwind-variants").TVReturnType<{
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
}, import("tailwind-variants").TVReturnType<{
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
export interface UploadZoneProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange" | "value" | "placeholder" | "onDrop"> {
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
export declare function UploadZone({ className, variant, size, disabled, label, labelWeight, error, helperText, labelClassName, uploadZoneClassName, contentClassName, helperClassName, errorClassName, previewClassName, multiple, accept, placeholder, icon, value, onChange, onDrop, name, ref, ...inputProps }: UploadZoneProps): import("react/jsx-runtime").JSX.Element;
export {};
