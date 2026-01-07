import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const empty: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, "flex flex-col", unknown, unknown, undefined>>;
type EmptyTextTagProps = "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type EmptyVariant = VariantProps<typeof empty>;
interface EmptyProps {
    image?: React.ReactNode;
    imageClassName?: string;
    defaultImageClassName?: string;
    text?: string;
    textAs?: EmptyTextTagProps;
    textClassName?: string;
    alignment?: EmptyVariant["alignment"];
    className?: string;
}
declare function Empty({ image, className, text, textAs, imageClassName, textClassName, alignment, defaultImageClassName, children, }: React.PropsWithChildren<EmptyProps>): react_jsx_runtime.JSX.Element;
declare namespace Empty {
    var displayName: string;
}

interface EmptySVGIconProps {
    className?: string;
}
declare function EmptyBoxIcon({ className }: EmptySVGIconProps): react_jsx_runtime.JSX.Element;
declare function EmptyProductBoxIcon({ className, }: EmptySVGIconProps): react_jsx_runtime.JSX.Element;
declare function SearchNotFoundIcon({ className, }: EmptySVGIconProps): react_jsx_runtime.JSX.Element;

export { Empty, EmptyBoxIcon, EmptyProductBoxIcon, type EmptyProps, SearchNotFoundIcon };
