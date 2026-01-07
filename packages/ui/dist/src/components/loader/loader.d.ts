import React from "react";
import { type VariantProps } from "tailwind-variants";
import { BarsSpinner } from "./bars-spinner";
import { PulseLoader } from "./pulse-loader";
import { Spinner } from "./spinner";
import { ThreeDotScale } from "./three-dot-scale";
declare const loader: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-loader h-auto", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-loader h-auto", unknown, unknown, undefined>>;
declare const Components: {
    bars: typeof BarsSpinner;
    pulse: typeof PulseLoader;
    spinner: typeof Spinner;
    threeDot: typeof ThreeDotScale;
};
type LoaderVariant = VariantProps<typeof loader>;
export interface LoaderTypes extends React.SVGProps<SVGSVGElement> {
    size?: LoaderVariant["size"];
    variant?: keyof typeof Components;
    color?: LoaderVariant["color"];
    className?: string;
}
export declare function Loader({ size, color, variant, className, ...props }: LoaderTypes): import("react/jsx-runtime").JSX.Element;
export declare namespace Loader {
    var displayName: string;
}
export {};
