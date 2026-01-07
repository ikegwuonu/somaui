import { type HTMLAttributes, type ReactNode } from "react";
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
export interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
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
export declare function Step({ title, description, icon, index: propsIndex, status: propsStatus, size, variant, color, dot: propsDot, className: propsClassName, circleClassName: propsCircleClassName, contentClassName: propsContentClassName, titleClassName: propsTitleClassName, descriptionClassName: propsDescriptionClassName, }: StepProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Step {
    var displayName: string;
}
export {};
