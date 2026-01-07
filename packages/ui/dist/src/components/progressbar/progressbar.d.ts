import type { HTMLAttributes } from "react";
import { type VariantProps } from "tailwind-variants";
declare const progressTrack: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "relative w-full bg-muted rounded-full overflow-hidden", unknown, unknown, undefined>>;
declare const progressBar: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
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
export declare function Progressbar({ value, label, size, color, labelPosition, className, barClassName, trackClassName, labelClassName, ...props }: ProgressbarProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Progressbar {
    var displayName: string;
}
export {};
