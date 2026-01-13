import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare function BarsSpinner({ fill, ...props }: React.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace BarsSpinner {
    var displayName: string;
}

declare function PulseLoader({ fill, ...props }: React.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace PulseLoader {
    var displayName: string;
}

declare function Spinner({ ...props }: React.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace Spinner {
    var displayName: string;
}

declare function ThreeDotScale({ fill, ...props }: React.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace ThreeDotScale {
    var displayName: string;
}

declare const loader: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
interface LoaderTypes extends React.SVGProps<SVGSVGElement> {
    size?: LoaderVariant["size"];
    variant?: keyof typeof Components;
    color?: LoaderVariant["color"];
    className?: string;
}
declare function Loader({ size, color, variant, className, ...props }: LoaderTypes): react_jsx_runtime.JSX.Element;
declare namespace Loader {
    var displayName: string;
}

export { Loader, type LoaderTypes };
