import { type VariantProps } from 'tailwind-variants';
declare const radialProgress: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export type RadialProgressBarProps = {
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
export declare function RadialProgressBar({ value, size, trackColor, progressColor, gradientColor, gradientId, startAngle, trackClassName, progressbarWidth, useParentResponsive, progressBarClassName, }: RadialProgressBarProps): import("react/jsx-runtime").JSX.Element;
export {};
