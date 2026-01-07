import { type ReactElement, type ReactNode } from "react";
import { type Placement } from "@floating-ui/react";
import { type VariantProps } from "tailwind-variants";
declare const tooltip: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export type TooltipProps = {
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
export declare function Tooltip({ children, content, gap, animation, placement, size, color, className, arrowClassName, showArrow, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Tooltip {
    var displayName: string;
}
export {};
