import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { ReactElement, ReactNode } from 'react';
import { Placement } from '@floating-ui/react';

declare const tooltip: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        invert: string;
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
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", unknown, unknown, undefined>>;
declare const tooltipAnimation: {
    readonly fadeIn: {
        readonly initial: {
            readonly opacity: 0;
        };
        readonly close: {
            readonly opacity: 0;
        };
    };
    readonly zoomIn: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "scale(0.96)";
        };
        readonly close: {
            readonly opacity: 0;
            readonly transform: "scale(0.96)";
        };
    };
    readonly slideIn: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "translateY(4px)";
        };
        readonly close: {
            readonly opacity: 0;
            readonly transform: "translateY(4px)";
        };
    };
};
type TooltipVariant = VariantProps<typeof tooltip>;
type TooltipProps = {
    children: ReactElement;
    content: ReactNode;
    color?: TooltipVariant["color"];
    size?: TooltipVariant["size"];
    placement?: Placement;
    gap?: number;
    animation?: keyof typeof tooltipAnimation;
    className?: string;
    arrowClassName?: string;
    showArrow?: boolean;
};
/**
 * Tooltip displays informative text when users hover, focus, or click an element.
 * Here is the API documentation of the Tooltip component.
 * You can use the following props to create a demo of tooltip.
 */
declare function Tooltip({ children, content, gap, animation, placement, size, color, className, arrowClassName, showArrow, }: TooltipProps): react_jsx_runtime.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}

export { Tooltip, type TooltipProps };
