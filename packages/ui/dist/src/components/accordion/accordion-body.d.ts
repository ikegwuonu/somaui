import { type ReactNode, type Ref, type HTMLAttributes } from "react";
type AccordionBodyProps = {
    as?: "div" | "ul";
    className?: string;
    children?: ReactNode;
    ref?: Ref<any>;
} & HTMLAttributes<HTMLDivElement> & HTMLAttributes<HTMLUListElement>;
export declare function AccordionBody({ as, className, children, ref, ...props }: AccordionBodyProps): import("react/jsx-runtime").JSX.Element;
export {};
