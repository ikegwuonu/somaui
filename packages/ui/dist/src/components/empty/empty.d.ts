import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const empty: import("tailwind-variants").TVReturnType<{
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, "flex flex-col", {
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, "flex flex-col", unknown, unknown, undefined>>;
type EmptyTextTagProps = "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type EmptyVariant = VariantProps<typeof empty>;
export interface EmptyProps {
    image?: React.ReactNode;
    imageClassName?: string;
    defaultImageClassName?: string;
    text?: string;
    textAs?: EmptyTextTagProps;
    textClassName?: string;
    alignment?: EmptyVariant["alignment"];
    className?: string;
}
export declare function Empty({ image, className, text, textAs, imageClassName, textClassName, alignment, defaultImageClassName, children, }: React.PropsWithChildren<EmptyProps>): import("react/jsx-runtime").JSX.Element;
export declare namespace Empty {
    var displayName: string;
}
export {};
