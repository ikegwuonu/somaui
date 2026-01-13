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

export { Title, type TitleProps };
