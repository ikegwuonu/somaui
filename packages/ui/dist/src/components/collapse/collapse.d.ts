import type { ReactNode } from "react";
export interface CollapseHeader {
    open?: boolean;
    toggle: () => void;
}
export interface CollapseProps {
    as?: "div" | "ul";
    header: ({ open, toggle }: CollapseHeader) => ReactNode;
    duration?: number;
    defaultOpen?: boolean;
    panelClassName?: string;
    className?: string;
    children?: ReactNode;
}
export declare function Collapse({ as, header, duration, defaultOpen, panelClassName, className, children, }: CollapseProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Collapse {
    var displayName: string;
}
