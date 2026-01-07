import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, Ref, ButtonHTMLAttributes, HTMLAttributes } from 'react';

type AccordionHeaderProps = {
    className?: string;
    children: ReactNode | (({ open }: {
        open: boolean;
    }) => ReactNode);
    ref?: Ref<HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
declare function AccordionHeader({ children, className, ref, ...props }: AccordionHeaderProps): react_jsx_runtime.JSX.Element;

type AccordionBodyProps = {
    as?: "div" | "ul";
    className?: string;
    children?: ReactNode;
    ref?: Ref<any>;
} & HTMLAttributes<HTMLDivElement> & HTMLAttributes<HTMLUListElement>;
declare function AccordionBody({ as, className, children, ref, ...props }: AccordionBodyProps): react_jsx_runtime.JSX.Element;

type AccordionProps = {
    as?: "div" | "li";
    defaultOpen?: boolean;
    duration?: number;
    className?: string;
    children?: ReactNode;
};
declare function Accordion({ as, defaultOpen, duration, className, children, }: AccordionProps): react_jsx_runtime.JSX.Element;
declare namespace Accordion {
    var Header: typeof AccordionHeader;
    var Body: typeof AccordionBody;
}

export { Accordion, type AccordionProps };
