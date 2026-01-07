import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

declare const radialProgress: tailwind_variants.TVReturnType<{
    startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
    };
}, undefined, "transform transition-all duration-200", {
    startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
    };
}, undefined, "transform transition-all duration-200", unknown, unknown, undefined>>;
type RadialProgressVariant = VariantProps<typeof radialProgress>;
type RadialProgressBarProps = {
    value?: number;
    size?: number;
    trackColor?: string;
    progressbarWidth?: number;
    progressColor?: string;
    gradientColor?: string;
    gradientId?: string;
    trackClassName?: string;
    progressBarClassName?: string;
    useParentResponsive?: boolean;
    startAngle?: RadialProgressVariant['startAngle'];
};
declare function RadialProgressBar({ value, size, trackColor, progressColor, gradientColor, gradientId, startAngle, trackClassName, progressbarWidth, useParentResponsive, progressBarClassName, }: RadialProgressBarProps): react_jsx_runtime.JSX.Element;

export { RadialProgressBar, type RadialProgressBarProps };
