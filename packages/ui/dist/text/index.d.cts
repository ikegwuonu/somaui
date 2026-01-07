import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const text: tailwind_variants.TVReturnType<{
    as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
    };
    fontWeight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-text text-text-secondary", {
    as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
    };
    fontWeight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, tailwind_variants.TVReturnType<{
    as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
    };
    fontWeight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-text text-text-secondary", unknown, unknown, undefined>>;
type TextProps = VariantProps<typeof text> & {
    title?: string;
    className?: string;
} & React.HTMLAttributes<any>;
declare function Text({ as, fontWeight, title, children, className, ...props }: React.PropsWithChildren<TextProps>): react_jsx_runtime.JSX.Element;
declare namespace Text {
    var displayName: string;
}

export { Text, type TextProps };
