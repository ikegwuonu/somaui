import type { ReactNode, Ref, ButtonHTMLAttributes } from "react";
type AccordionHeaderProps = {
    className?: string;
    children: ReactNode | (({ open }: {
        open: boolean;
    }) => ReactNode);
    ref?: Ref<HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
export declare function AccordionHeader({ children, className, ref, ...props }: AccordionHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
