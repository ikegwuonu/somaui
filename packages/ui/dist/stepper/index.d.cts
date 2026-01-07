import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, ReactNode } from 'react';

declare const lineClasses: {
    base: string;
    top: {
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
    titleLine: string;
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
};
declare const circleClasses: {
    base: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    waiting: string;
    variant: {
        solid: {
            base: string;
            color: {
                primary: string;
                secondary: string;
                danger: string;
                info: string;
                success: string;
                warning: string;
            };
        };
        outline: {
            base: string;
            color: {
                primary: string;
                secondary: string;
                danger: string;
                info: string;
                success: string;
                warning: string;
            };
        };
    };
};
interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    index?: number;
    status?: "waiting" | "in-progress" | "completed" | "error";
    size?: keyof typeof circleClasses.size;
    variant?: keyof typeof circleClasses.variant;
    color?: keyof typeof lineClasses.color;
    dot?: boolean;
    className?: string;
    circleClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}
declare function Step({ title, description, icon, index: propsIndex, status: propsStatus, size, variant, color, dot: propsDot, className: propsClassName, circleClassName: propsCircleClassName, contentClassName: propsContentClassName, titleClassName: propsTitleClassName, descriptionClassName: propsDescriptionClassName, }: StepProps): react_jsx_runtime.JSX.Element;
declare namespace Step {
    var displayName: string;
}

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    currentIndex?: number;
    direction?: "horizontal" | "vertical";
    dot?: boolean;
    children: ReactNode;
    dotClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}
declare function Stepper({ currentIndex, children, direction, dot, className, titleClassName, dotClassName, contentClassName, descriptionClassName, }: StepperProps): react_jsx_runtime.JSX.Element;
declare namespace Stepper {
    var Step: typeof Step;
    var displayName: string;
}

export { Stepper, type StepperProps };
