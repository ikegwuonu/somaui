import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React__default from 'react';

declare const fieldClearButton: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "somaui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground", unknown, unknown, undefined>>;
interface FieldClearButtonProps {
    as?: React__default.ElementType;
    hasSuffix?: boolean;
    size?: VariantProps<typeof fieldClearButton>["size"];
    onClick?: (event: React__default.MouseEvent) => void;
    className?: string;
}
declare function FieldClearButton({ as, size, onClick, hasSuffix, className, }: FieldClearButtonProps): react_jsx_runtime.JSX.Element;
declare namespace FieldClearButton {
    var displayName: string;
}

export { FieldClearButton, type FieldClearButtonProps };
