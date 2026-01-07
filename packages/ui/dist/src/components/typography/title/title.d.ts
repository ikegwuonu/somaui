import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const title: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export type TitleProps = VariantProps<typeof title> & {
    className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;
export declare function Title({ as, fontWeight, children, className, ...props }: React.PropsWithChildren<TitleProps>): import("react/jsx-runtime").JSX.Element;
export declare namespace Title {
    var displayName: string;
}
export {};
