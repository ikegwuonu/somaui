import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const fieldClearButton: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "somaui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "somaui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground", unknown, unknown, undefined>>;
export interface FieldClearButtonProps {
    as?: React.ElementType;
    hasSuffix?: boolean;
    size?: VariantProps<typeof fieldClearButton>["size"];
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
}
export declare function FieldClearButton({ as, size, onClick, hasSuffix, className, }: FieldClearButtonProps): import("react/jsx-runtime").JSX.Element;
export declare namespace FieldClearButton {
    var displayName: string;
}
export {};
