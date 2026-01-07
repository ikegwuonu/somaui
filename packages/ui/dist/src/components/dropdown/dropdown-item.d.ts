import type { Ref, ButtonHTMLAttributes, HTMLAttributes } from "react";
export type DropdownItemProps = {
    as?: "button" | "li";
    className?: string;
    disabledClassName?: string;
    activeClassName?: string;
    disabled?: boolean;
    ref?: Ref<any>;
} & ButtonHTMLAttributes<HTMLButtonElement> & HTMLAttributes<HTMLLIElement>;
export declare function DropdownItem({ as, className, children, disabled, activeClassName, disabledClassName, ref, ...props }: DropdownItemProps): import("react/jsx-runtime").JSX.Element;
