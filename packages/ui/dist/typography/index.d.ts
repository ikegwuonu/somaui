import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const title: tailwind_variants.TVReturnType<{
    as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    fontWeight: {
        readonly extraBold: "font-extrabold";
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-title text-text-primary", {
    as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    fontWeight: {
        readonly extraBold: "font-extrabold";
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, tailwind_variants.TVReturnType<{
    as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    fontWeight: {
        readonly extraBold: "font-extrabold";
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-title text-text-primary", unknown, unknown, undefined>>;
type TitleProps = VariantProps<typeof title> & {
    className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;
declare function Title({ as, fontWeight, children, className, ...props }: React.PropsWithChildren<TitleProps>): react_jsx_runtime.JSX.Element;
declare namespace Title {
    var displayName: string;
}

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

type BoldProps = {
    className?: string;
} & React.HTMLAttributes<any>;
declare function Bold({ children, className, ...props }: React.PropsWithChildren<BoldProps>): react_jsx_runtime.JSX.Element;
declare namespace Bold {
    var displayName: string;
}

type ItalicProps = {
    className?: string;
} & React.HTMLAttributes<any>;
declare function Italic({ children, className, ...props }: React.PropsWithChildren<ItalicProps>): react_jsx_runtime.JSX.Element;
declare namespace Italic {
    var displayName: string;
}

type CodeProps = {
    className?: string;
} & React.HTMLAttributes<HTMLPreElement>;
declare function Code({ children, className, ...props }: React.PropsWithChildren<CodeProps>): react_jsx_runtime.JSX.Element;
declare namespace Code {
    var displayName: string;
}

type BlockquoteProps = {
    className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;
declare function Blockquote({ children, className, ...props }: React.PropsWithChildren<BlockquoteProps>): react_jsx_runtime.JSX.Element;
declare namespace Blockquote {
    var displayName: string;
}

export { Blockquote, type BlockquoteProps, Bold, type BoldProps, Code, type CodeProps, Italic, type ItalicProps, Text, type TextProps, Title, type TitleProps };
