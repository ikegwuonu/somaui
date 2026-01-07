import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const text: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export type TextProps = VariantProps<typeof text> & {
    title?: string;
    className?: string;
} & React.HTMLAttributes<any>;
export declare function Text({ as, fontWeight, title, children, className, ...props }: React.PropsWithChildren<TextProps>): import("react/jsx-runtime").JSX.Element;
export declare namespace Text {
    var displayName: string;
}
export {};
