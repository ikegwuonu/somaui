import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface CollapseHeader {
    open?: boolean;
    toggle: () => void;
}
interface CollapseProps {
    as?: "div" | "ul";
    header: ({ open, toggle }: CollapseHeader) => ReactNode;
    duration?: number;
    defaultOpen?: boolean;
    panelClassName?: string;
    className?: string;
    children?: ReactNode;
}
declare function Collapse({ as, header, duration, defaultOpen, panelClassName, className, children, }: CollapseProps): react_jsx_runtime.JSX.Element;
declare namespace Collapse {
    var displayName: string;
}

export { Collapse, type CollapseHeader, type CollapseProps };
