import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React__default from 'react';

declare const fieldError: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-red", unknown, unknown, undefined>>;
interface FieldErrorTextProps extends React__default.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    as?: 'div' | 'span';
    error: string | null | undefined;
    size?: VariantProps<typeof fieldError>['size'];
    className?: string;
}
declare function FieldErrorText({ as, error, size, className, }: FieldErrorTextProps): react_jsx_runtime.JSX.Element | null;
declare namespace FieldErrorText {
    var displayName: string;
}

export { FieldErrorText };
