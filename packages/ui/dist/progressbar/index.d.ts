import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { HTMLAttributes } from 'react';

declare const progressTrack: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "relative w-full bg-muted rounded-full overflow-hidden", {
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
}, undefined, "relative w-full bg-muted rounded-full overflow-hidden", unknown, unknown, undefined>>;
declare const progressBar: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full", {
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full", unknown, unknown, undefined>>;
type ProgressTrackVariant = VariantProps<typeof progressTrack>;
type ProgressBarVariant = VariantProps<typeof progressBar>;
interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    label?: string;
    size?: ProgressTrackVariant["size"];
    color?: ProgressBarVariant["color"];
    labelPosition?: "insideBar" | "inlineLeft" | "inlineRight";
    className?: string;
    trackClassName?: string;
    barClassName?: string;
    labelClassName?: string;
}
declare function Progressbar({ value, label, size, color, labelPosition, className, barClassName, trackClassName, labelClassName, ...props }: ProgressbarProps): react_jsx_runtime.JSX.Element;
declare namespace Progressbar {
    var displayName: string;
}

export { Progressbar, type ProgressbarProps };
