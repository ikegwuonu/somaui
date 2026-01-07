import type { ReactNode } from "react";
import { AccordionHeader } from "./accordion-header";
import { AccordionBody } from "./accordion-body";
export type AccordionProps = {
    as?: "div" | "li";
    defaultOpen?: boolean;
    duration?: number;
    className?: string;
    children?: ReactNode;
};
export declare function Accordion({ as, defaultOpen, duration, className, children, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Accordion {
    var Header: typeof AccordionHeader;
    var Body: typeof AccordionBody;
}
