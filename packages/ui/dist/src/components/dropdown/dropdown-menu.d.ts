import { type ReactNode } from "react";
import { type MenuItemsProps } from "@headlessui/react";
type DropdownMenuProps = {
    className?: string;
    anchorWidth?: boolean;
    children?: ReactNode;
} & MenuItemsProps;
export declare function DropdownMenu({ className, children, anchorWidth, ...props }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export declare namespace DropdownMenu {
    var displayName: string;
}
export {};
