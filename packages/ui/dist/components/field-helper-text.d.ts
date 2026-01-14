import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React__default from 'react';

declare const fieldHelperText: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>;
interface FieldHelperTextProps extends React__default.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    as?: 'div' | 'span';
    size?: VariantProps<typeof fieldHelperText>['size'];
    className?: string;
}
declare function FieldHelperText({ size, as, children, className, }: React__default.PropsWithChildren<FieldHelperTextProps>): react_jsx_runtime.JSX.Element | null;
declare namespace FieldHelperText {
    var displayName: string;
}

export { FieldHelperText, type FieldHelperTextProps };
