import { type ReactNode, type HTMLAttributes } from "react";
declare const containerClasses: {
    base: string;
    line: string;
    verticalLine: {
        base: string;
        left: {
            noDot: {
                sm: string;
                md: string;
                lg: string;
            };
            dot: {
                sm: string;
                md: string;
                lg: string;
            };
        };
    };
};
type StepperContextType = {
    currentIndex: number;
    direction: "horizontal" | "vertical";
    dot: boolean;
    dotClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    registerStep: (id: string) => number;
    getStepClassName: (size: keyof typeof containerClasses.verticalLine.left.noDot) => string;
    getCircleClassName: () => string;
    getContentClassName: () => string;
};
export declare function useStepper(): StepperContextType;
export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    currentIndex?: number;
    direction?: "horizontal" | "vertical";
    dot?: boolean;
    children: ReactNode;
    dotClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}
export declare function Stepper({ currentIndex, children, direction, dot, className, titleClassName, dotClassName, contentClassName, descriptionClassName, }: StepperProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Stepper {
    var Step: typeof import("./step").Step;
    var displayName: string;
}
export {};
