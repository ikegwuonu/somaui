import React from 'react';
import { type VariantProps } from 'tailwind-variants';
declare const fieldError: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-red", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-red", unknown, unknown, undefined>>;
interface FieldErrorTextProps extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    as?: 'div' | 'span';
    error: string | null | undefined;
    size?: VariantProps<typeof fieldError>['size'];
    className?: string;
}
export declare function FieldErrorText({ as, error, size, className, }: FieldErrorTextProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace FieldErrorText {
    var displayName: string;
}
export {};
