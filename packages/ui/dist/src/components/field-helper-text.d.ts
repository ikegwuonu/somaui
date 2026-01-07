import React from 'react';
import { type VariantProps } from 'tailwind-variants';
declare const fieldHelperText: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, undefined, {
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
}, undefined, undefined, unknown, unknown, undefined>>;
export interface FieldHelperTextProps extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    as?: 'div' | 'span';
    size?: VariantProps<typeof fieldHelperText>['size'];
    className?: string;
}
export declare function FieldHelperText({ size, as, children, className, }: React.PropsWithChildren<FieldHelperTextProps>): import("react/jsx-runtime").JSX.Element | null;
export declare namespace FieldHelperText {
    var displayName: string;
}
export {};
